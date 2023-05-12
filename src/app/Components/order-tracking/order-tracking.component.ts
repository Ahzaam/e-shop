import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  urlSafe: SafeResourceUrl | any
  url: string = "https://eshop-tracking.web.app/?id=mylocation";
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
