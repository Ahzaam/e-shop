import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private uploadTask?: AngularFireUploadTask;
  private uploading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public percentage = 0;
  constructor(
    private storage: AngularFireStorage,
    private db: DatabaseService
  ) {}

  uploadFile(path: any, file: any) {
    this.percentage = 0;

    // File uploads here
    this.uploadTask = this.storage.upload(path, file);

    // Getting the upload percentage by subscribing
    this.uploadTask.percentageChanges().subscribe((percentage) => {
      this.percentage = percentage as number;
      console.log(percentage);
    });

    // Promise resolves the url
    return new Promise<string>((resolve) => {
      this.uploadTask?.then((data) => {
        data.ref.getDownloadURL().then((url) => {
          resolve(url);
        });
      });
      // file uploaded here
    });
  }

  cancelUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.cancel();
  }

  pauseUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.pause();
  }
  resumeUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.resume();
  }

  isActiveRunning(): Observable<boolean> {
    return this.uploading.asObservable();
  }
}
