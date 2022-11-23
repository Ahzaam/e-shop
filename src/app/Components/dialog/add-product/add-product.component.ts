import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddProductComponent>) {
    // this.product = {}
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
