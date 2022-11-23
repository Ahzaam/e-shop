import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
    return new Promise((resolve) => {
      this.firestore
        .collection(DatabaseService.Product)
        .snapshotChanges()
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
}
