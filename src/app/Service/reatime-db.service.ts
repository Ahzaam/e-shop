import { Injectable } from '@angular/core';
// import { initializeApp } from "firebase/app";
// import { Database, getDatabase, ref, onValue } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class ReatimeDBService {
  // database: Database
  // constructor() {
  //   const firebaseConfig = {
  //     // ...
  //     // The value of `databaseURL` depends on the location of the database
  //     databaseURL: "https://onlineshop-delivery-default-rtdb.firebaseio.com",
  //   };

  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  //   this.database = getDatabase()
  // }

  // getLocation() {
  //   const starCountRef = ref(this.database, 'mylocation');
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data)
  //   });
  // }

}
