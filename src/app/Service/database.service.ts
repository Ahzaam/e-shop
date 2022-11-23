import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  getProduct = new Observable(() => {
    this.firestore.collection(DatabaseService.Product).ref.onSnapshot((doc) => {
      console.log(doc.docs.map((data) => data.data()));
      return doc.docs.map((data) => data.data());
    });
  });
}
