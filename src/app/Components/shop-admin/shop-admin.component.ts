import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.css']
})
export class ShopAdminComponent implements OnInit {
  tab = 1
  constructor() {


  }


  ngOnInit(): void {


  }
  tabchange(event: any) {
    this.tab = +event.target.value
    console.log(this.tab)
  }

}