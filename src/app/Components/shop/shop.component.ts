import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Shop } from 'src/app/Model/shop';
import { DatabaseService } from 'src/app/Service/database.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shop: Shop | undefined | null;

  constructor(private route: ActivatedRoute, private db: DatabaseService) {}

  ngOnInit(): void {
    this.db
      .getShopByName(<string>this.route.snapshot.paramMap.get('shop_name'))
      .then((shop) => {
        this.shop = shop;
      });
  }
}
