import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
})
export class ProductsCarouselComponent implements OnInit {
  defaultTransform = 0;
  slider: HTMLDivElement | any;
  constructor() {}

  ngOnInit(): void {
    this.slider = document.getElementById('slider');
    setInterval(() => {
      this.goNext(this.slider);
    }, 3000);
  }

  goNext(slider: any) {
    this.defaultTransform = this.defaultTransform - 398;

    if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }

  goPrev(slider: any) {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
}
