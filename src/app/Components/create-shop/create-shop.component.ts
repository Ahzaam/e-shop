import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { base64ToFile } from 'ngx-image-cropper';
import { AlertComponent } from 'src/app/Dialogs/alert/alert.component';
import { ImageCropComponent } from 'src/app/Dialogs/image-crop/image-crop.component';
import { Shop } from 'src/app/Model/shop';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css'],
})
export class CreateShopComponent implements OnInit {
  imageChangedEvent: any = '';
  progress: { percentage: number } = { percentage: 0 };

  croppedImage: any = '';
  shop: Shop = {
    name: '',
    joined: 0,
    openingTime: 0,
    closingTime: 0,
    bannerImg: '',
    location: ['7.0578° N', '80.5730° E'],
    logo: '',
    paymentGateway: false,
    quote: '',
    rating: 0,
    shopId: '',
    type: '',
    address: '',
    city: '',
    zip: 0,
  };
  constructor(private dialog: MatDialog, private storage: StorageService) {}

  ngOnInit(): void {}
  fileChangeEvent(event: any): void {
    if (event.target.files[0].size < 4194304) {
      this.dialog
        .open(ImageCropComponent, {
          maxWidth: '700px',
          maxHeight: '90vh',

          data: {
            rounded: true,
            aspectRatio: 1,
            event,
          },
        })
        .afterClosed()
        .subscribe((img) => {
          this.croppedImage = img;
          let fileUpload = {
            path: '/shop/id/logo',
            file: base64ToFile(img.base64),
            name: '',
          };

          this.storage.uploadFile(fileUpload, this.progress);
        });
    } else {
      this.dialog.open(AlertComponent, {
        data: {
          message: ` your file size is ${(
            event.target.files[0].size /
            1024 /
            1024
          ).toFixed(1)}MB which is greater than 4MB`,
        },
      });
    }
  }
}
