import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
})
export class ProductsCarouselComponent implements OnInit {
  defaultTransform = 0;
  width: number | any;
  slider: HTMLDivElement | any;
  constructor() {}

  ngOnInit(): void {
    this.slider = document.getElementById('slider');
  }
  ngAfterViewInit() {
    let rectw: number = document
      .getElementById('slider-w-0')
      ?.getBoundingClientRect().width as number;
    this.width = rectw + rectw / 8;
  }

  goNext(slider: any) {
    this.defaultTransform =
      this.defaultTransform - (this.width + this.width / 8);

    if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }

  goPrev(slider: any) {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else
      this.defaultTransform =
        this.defaultTransform + (this.width + this.width / 8);
    slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
}
