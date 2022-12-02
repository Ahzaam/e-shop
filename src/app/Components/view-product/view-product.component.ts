import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/Service/database.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  constructor(private db: DatabaseService) {}

  ngOnInit(): void {}
}
