import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banners = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
      data: 'howa re you',
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg',
      data: 'nuy everything',
    },
    {
      image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
      data: 'nuy everything',
    },
  ];
  sliderpos = 0;

  constructor() {}

  ngOnInit(): void {}

  next() {
    if (this.sliderpos < this.banners.length - 1) {
      this.sliderpos += 1;
    } else {
      this.sliderpos = 0;
    }
  }
  prev() {
    if (this.sliderpos === 0) {
      this.sliderpos = this.banners.length - 1;
    } else {
      this.sliderpos -= 1;
    }
  }
}
