import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private static readonly Product = 'Product';

  constructor(private firestore: AngularFirestore) {}

  getUserData(userId: string) {
    return new Promise((resolve) => {
      this.firestore
        .collection('Users')
        .doc(userId)
        .get()
        .subscribe((data) => {
          resolve(data.data());
        });
    });
  }

  // getProduct(){
  //   return new Promise((resolve ) => {

  //   })
  // }

  getProduct() {
    return this.firestore
      .collection(DatabaseService.Product)
      .snapshotChanges()
      .pipe(map((responce) => responce.map((data) => data.payload.doc.data())));
  }

  getAllProduct() {
    return this.docReturn(
      this.firestore.collection('Product').doc('3BPVYpNKOWpsgimAUy2X')
    );
  }

  private docReturn(fun: AngularFirestoreDocument<unknown>) {
    return new Promise((resolve) => {
      fun.get().subscribe((data) => {
        resolve(data.data());
      });
    });
  }

  private colReturn(fun: any) {
    return new Promise((resolve) => {
      fun.get().subscribe(() => {});
    });
  }
}
