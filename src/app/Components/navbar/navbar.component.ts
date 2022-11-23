import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import { DatabaseService } from 'src/app/Service/database.service';
import {MatDialog }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userdet = true;
  smallnav = true;
  isAuth = false;
  user: any;
  load = true;
  data: any;
  constructor(public auth: AuthenticateService, private db: DatabaseService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.db.getProduct.subscribe((data) => {
      console.log('fkjehfiqwifgqiwugfuq3g4')
      console.log(data)
      this.data = data;
    });
    // this.db.getProduct().then((data) => {
    //   console.log(data);
    //   this.data = data;
    // });

    this.auth.isUserAvailable().subscribe((user) => {
      this.load = false;
      if (user) {
        this.user = user;
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  addProduct(){
    
  }
}
