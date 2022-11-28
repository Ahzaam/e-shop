import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public uploadTask?: AngularFireUploadTask;
  public uploading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private storage: AngularFireStorage) {}

  uploadFile(
    fileUpload: { path: any; file: any; name: any },
    upload: { percentage: number; downloadURL: string }
  ) {
    this.uploadTask = this.storage.upload(fileUpload.path, fileUpload.file);

    this.uploadTask?.percentageChanges().subscribe((percentage) => {
      upload.percentage = percentage as number;
    });
    this.uploadTask.task.snapshot.ref
      .getDownloadURL()
      .then((downloadURL) => (upload.downloadURL = downloadURL));
  }

  public cancelUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.cancel();
  }

  public pauseUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.pause();
  }
  public resumeUploadTask() {
    this.uploading.next(false);
    this.uploadTask?.resume();
  }

  public isActiveRunning(): Observable<boolean> {
    return this.uploading.asObservable();
  }
}
