import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { base64ToFile } from 'ngx-image-cropper';
import { AlertComponent } from '../Dialogs/alert/alert.component';
import { ImageCropComponent } from '../Dialogs/image-crop/image-crop.component';

@Injectable({
  providedIn: 'root',
})
export class CommonsService {
  public dargBound: number = NaN;
  croppedImage: any;
  constructor(private dialog: MatDialog) {}

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

  cropper(
    file: any,
    config: { aspect_ratio: number; event: any; rounded: boolean }
  ) {
    return new Promise<{ base_64_to_image: Blob; image: any }>(
      (resolve, reject) => {
        if (file[0].size < 4194304) {
          this.dialog
            .open(ImageCropComponent, {
              maxWidth: '700px',
              maxHeight: '90vh',

              data: {
                rounded: config.rounded,
                aspectRatio: config.aspect_ratio,
                event: config.event,
              },
            })
            .afterClosed()
            .subscribe((img) => {
              if (img) {
                resolve({
                  base_64_to_image: base64ToFile(img.base64),
                  image: img.base64,
                });
              } else {
                resolve(<{ base_64_to_image: Blob; image: any }>{});
              }
            });
        } else {
          this.alertService(
            ` your file size is ${(file[0].size / 1024 / 1024).toFixed(
              1
            )}MB which is greater than 4MB`,
            'error'
          );
        }
      }
    );
  }

  alertService(
    message: string,
    type: 'confirmation' | 'warning' | 'success' | 'error'
  ) {
    return new Promise((resolve, reject) => {
      this.dialog
        .open(AlertComponent, {
          data: {
            message: message,
            type,
          },
        })
        .afterClosed()
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
}
