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
  upload: { percentage: number; downloadURL: string } = {
    percentage: 0,
    downloadURL: '',
  };

  croppedImage: any = '';

  // This is the shop Object you can access the data inside like shop.name
  shop: Shop = {
    name: '',
    joined: 0,
    openingTime: '',
    closingTime: '',
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
    docId: '',
  };

  // 🔥 Call the DatabaseService as same as storage inside constructor 👇👇👇
  // after constructing it you can use it by the name you defined

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

          this.storage.uploadFile(fileUpload, this.upload);
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

  /** 
   🤘🤘🤘🤘🤘🤘🤘🤘

   * Just send a msg when your reading this

   * ⭐⭐⭐ add [(ngModel)] to every input feild with their obkect name 
      Ex: [(ngModel)]="shop.name", There is a example line no 54 inside ./create-shop.component.html
      this is same as value attribute in html dont use value here


   * For Category select, add values to the options 

   * Implement a save function here that passes the data to saveshop function inside DatabaseService
     Your fuction can be called by adding (click)="YOUR_FUNCTION_NAME" inside button element

   * LITTLE LOGICAL: after upload.percentage is 100, upload.downloadURL will be replaced with a URL automatically
     you need to add the URL to shop.logo. HINT: Implement a if and check whether the progress is 100 else just return
     ## Don't add shop.logo inside the file input in html just keep the input same as it is and inside your function do the above thing

   * If a user input hase value same as inside the contructer you need to display a dialog box
     saying "Fill out all the feilds", Line No 74 - 82 is a dialog box you can refer it
     ## Dialog box need some UI changes, just continue with the current one
   
   * Inside the function before passing the data fillout missing feilds in shop 
     such as joindedtime it must be in miliseconds to get it just call Date.now() 

   * docId must must be replaced with a document ID, 
     you can generate a document ID by calling generateDocId() funtion that is inside DatabaseService


   
   * after calling the saveShop() function inside check the firestore whether the data has been saved

   * Just look those function in StorageService and DatabaseService and get a rough idea about it
     it will help you in future of this project, 
     if you understand the function just add a comment 
     

   * If you have any kind of a problem feel free to contact me 👍👍👍


   ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥
   */
}
