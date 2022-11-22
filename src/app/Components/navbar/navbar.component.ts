import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import { DatabaseService } from 'src/app/Service/database.service';

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
  constructor(public auth: AuthenticateService, private db:DatabaseService) {}

  ngOnInit(): void {
    this.db.getProduct().then((data) => {
      console.log(data)
    })


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
}
