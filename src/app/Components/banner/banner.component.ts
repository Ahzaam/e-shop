import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  timeout: any;
  banners = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
      data: 'nuy everything',
    },
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

  ngOnInit(): void {
    setTimeout(() => this.next(), 5000);
  }

  next() {
    clearTimeout(this.timeout);
    if (this.sliderpos < this.banners.length - 1) {
      this.sliderpos += 1;
    } else {
      this.sliderpos = 0;
    }
    this.timeout = setTimeout(() => this.next(), 5000);
  }
  prev() {
    clearTimeout(this.timeout);
    if (this.sliderpos === 0) {
      this.sliderpos = this.banners.length - 1;
    } else {
      this.sliderpos -= 1;
    }
    this.timeout = setTimeout(() => this.next(), 5000);
  }

  changePos(ind: number) {
    clearTimeout(this.timeout);
    this.sliderpos = ind;
    this.timeout = setTimeout(() => this.next(), 5000);
  }
}
