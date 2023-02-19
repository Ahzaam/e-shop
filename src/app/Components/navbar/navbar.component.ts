import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import { CommonsService } from 'src/app/Service/commons.service';
import { DatabaseService } from 'src/app/Service/database.service';
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('72P2HJ121O', 'd196e19d15205d7001a2a73ede52a083');
const index = client.initIndex('test_online_shop');
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkBound: boolean = false;
  userdet = true;
  smallnav = true;
  search = false;

  constructor(
    public auth: AuthenticateService,

    public router: Router,
    private getbound: CommonsService
  ) { }

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

  }
  ngAfterViewInit(): void {
    document.body.addEventListener('click', (ev) => {
      let ele = ev.target as HTMLDivElement;
      console.log(ele.id)
      if (ele.id !== 'navbar-multi-level' && ele.id !== 'toggle') {
        this.smallnav = true;
      }
    });
  }

  searchAlgolia(event: any): void {
    index.search(event.target.value).then((res) => {
      console.log(res.hits);
    })
  }
}
