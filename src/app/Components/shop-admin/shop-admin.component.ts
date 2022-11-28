import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.css']
})
export class ShopAdminComponent implements OnInit {

  constructor() {


  }


  ngOnInit(): void {



  }


  // interface IEmployee {

  //   Name: string;
  //   Tech: string;
  //   Id: number;
  //   Price: number;

  // }


  items: Array<any> = [
    {
      Name: "Dashboard",
      Tech: "React JS",
      Id: 9845745,
      Price: 123
    },
    {
      Name: "Dashboard",
      Tech: "Angular JS",
      Id: 9843745,
      Price: 149
    },
    {
      Name: "Dashboard",
      Tech: "Vue JS",
      Id: 9845645,
      Price: 153
    },

  ];

  headers: Array<string> = ['Project Name', 'technology', 'ID', 'Price'];

}
