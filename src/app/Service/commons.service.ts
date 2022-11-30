import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonsService {
  public dargBound: number = NaN;
  constructor() {}

  setBound(id: string) {
    var elem = document.getElementById(id);
    // crossbrowser version
    var box = elem?.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box!.top + scrollTop - clientTop;
    var left = box!.left + scrollLeft - clientLeft;
    this.dargBound = Math.round(top);
    return 0;
  }
  getBound() {
    return this.dargBound;
  }
}
