import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Model/product';
import { Shop } from '../Model/shop';
import { SiteUser } from '../Model/siteuser';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private static readonly _products = 'Products';
  private static readonly _shops = 'Shops';
  private static readonly _users = 'Users';

  constructor(private firestore: AngularFirestore) { }

  // COMMON
  generateDocId() {
    /** Generates a document id for firestore document */
    return this.firestore.createId();
  }

  // getProduct(){
  //   return new Promise((resolve ) => {

  //   })
  // }

  getProduct() {
    /**
     * Snapshots the products */
    // return this.firestore
    //   .collection(DatabaseService._product)
    //   .snapshotChanges()
    //   .pipe(map((responce) => responce.map((data) => data.payload.doc.data())));
  }

  getAllProduct() {
    // this.firestore.collection('Product').doc('3BPVYpNKOWpsgimAUy2X')
  }

  // SHOP
  saveShop(shop: Shop) {
    return this.firestore
      .collection(DatabaseService._shops)
      .doc(shop.shop_id)
      .set(shop);
  }

  getShopByName(name: string) {
    return new Promise<Shop>((resolve, reject) => {
      this.firestore
        .collection(DatabaseService._shops, (result) =>
          result.where('lowercase_name', '==', name)
        )
        .get()
        .subscribe((shops) => {
          const shop: Shop = (<Shop[]>shops.docs.map((docs) => docs.data()))[0];
          resolve(shop);
        });
    });
  }

  isShopNameExists(name: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.firestore
        .collection(DatabaseService._shops, (result) =>
          result.where('name', '==', name)
        )

        .get()
        .subscribe((response) => {
          resolve(response.docs.length !== 0);
        });
    });
  }

  // IMPLEMENT A API TO RECOMMEND SHOPS TO THE CLIENTS  

  getAllShops() {
    return new Promise<Shop[]>((resolve, reject) => {
      this.firestore.collection(DatabaseService._shops,
        results => results.where('status', 'not-in', ['pending', 'declined'])
      ).get()
        .subscribe((response) => {
          resolve(<Shop[]>response.docs.map(docs => docs.data()))
        })
    })
  }

  // USER
  getUser(uid: string) {
    return new Promise<SiteUser>((resolve, reject) => {
      this.firestore
        .collection(DatabaseService._users)
        .doc(uid)
        .get()
        .subscribe((docs) => {
          resolve(<SiteUser>docs.data());
        });
    });
  }

  getUserRealtime(uid: string) {
    return new Observable<SiteUser>((observer) => {
      this.firestore
        .collection(DatabaseService._users)
        .doc(uid)
        .snapshotChanges()
        .subscribe((data) => {
          observer.next(<SiteUser>data.payload.data())
        })
    })
  }

  createUser(site_user: SiteUser) {
    return this.firestore
      .collection(DatabaseService._users)
      .doc(site_user.uid)
      .set(site_user);
  }


  // PRODUCTS

  addProduct(product: Product) {
    return this.firestore.collection(DatabaseService._products).doc(product.id).set(product);
  }

}
