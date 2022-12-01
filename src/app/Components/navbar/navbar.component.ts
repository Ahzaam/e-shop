import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import { CommonsService } from 'src/app/Service/commons.service';
import { DatabaseService } from 'src/app/Service/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkBound: boolean = false;
  userdet = true;
  smallnav = true;
  isAuth = false;
  user: any;
  load = true;
  data: any;
  constructor(
    public auth: AuthenticateService,
    private db: DatabaseService,
    private dialog: MatDialog,
    public router: Router,
    private getbound: CommonsService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      let bound = this.getbound.getBound() - 500;
      if (
        window.pageYOffset > bound &&
        window.pageYOffset < bound + screen.height * 3
      ) {
        this.darkBound = true;
      } else {
        this.darkBound = false;
      }
    });
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
