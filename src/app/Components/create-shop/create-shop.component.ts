import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { base64ToFile } from 'ngx-image-cropper';
import { AlertComponent } from 'src/app/Dialogs/alert/alert.component';
import { ImageCropComponent } from 'src/app/Dialogs/image-crop/image-crop.component';
import { Shop } from 'src/app/Model/shop';
import { AuthenticateService } from 'src/app/Service/authenticate.service';
import { CommonsService } from 'src/app/Service/commons.service';
import { DatabaseService } from 'src/app/Service/database.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css'],
})
export class CreateShopComponent implements OnInit {
  cropped_banner: { base_64_to_image: Blob; image: any } = <
    { base_64_to_image: Blob; image: any }
  >{};

  name_error_message = '';

  banner_comp = false;
  creating = false;
  cropped_logo: { base_64_to_image: Blob; image: any } = <
    { base_64_to_image: Blob; image: any }
  >{};

  upload: { percentage: number; downloadURL: string } = {
    percentage: 0,
    downloadURL: '',
  };

  croppedImage: any = '';

  shop: Shop = <Shop>{};
  // This is the shop Object you can access the data inside like shop.name

  // 🔥 Call the DatabaseService as same as storage inside constructor 👇👇👇
  // after constructing it you can use it by the name you defined

  constructor(
    private dialog: MatDialog,
    public storage: StorageService,
    private db: DatabaseService,
    private _formBuilder: FormBuilder,
    private commonService: CommonsService,
    private router: Router,
    private auth: AuthenticateService
  ) {
    this.shop.payment_gateway = false;
    this.shop.owner_uid = auth.site_user.uid;
    this.shop.email = auth.site_user.email;
    this.shop.phone_number = auth.site_user.phone_number;
    console.log(this.shop);
  }

  ngOnInit(): void {}
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  shop_types = [
    { type: 'grocery', image: '/assets/icons/grocery.jpg' },
    { type: 'costume', image: '/assets/icons/costume.jpg' },
    { type: 'cosmetics', image: '/assets/icons/cosmetics.jpg' },
    { type: 'footwear', image: '/assets/icons/footwear.jpg' },
    { type: 'mobile', image: '/assets/icons/mobile.png' },
    { type: 'furniture', image: '/assets/icons/furniture.jpg' },
  ];

  logoChangeEvent(event: any) {
    this.commonService
      .cropper(event.target.files, {
        aspect_ratio: 1,
        event: event,
        rounded: true,
      })
      .then((cropped) => {
        this.cropped_logo = cropped;

        // this.storage
        //   .uploadFile('shop/id/logo', cropped.base_64_to_image, 'logo')
        //   .then((url) => {

        //     console.log(url);
        //   });
      });
  }

  bannerChangeEvent(event: any): void {
    this.commonService
      .cropper(event.target.files, {
        aspect_ratio: 4,
        event: event,
        rounded: false,
      })
      .then((cropped) => {
        this.cropped_banner = cropped;

        // this.storage
        //   .uploadFile('shop/id/logo', cropped.base_64_to_image, 'logo')
        //   .then((url) => {

        //     console.log(url);
        //   });
      });
  }

  async afterName(stepper: any) {
    this.name_error_message = '';
    if (this.shop.name === '' || !this.shop.name) {
      this.name_error_message = 'Enter a shop name to continue';
    } else {
      if (await this.db.isShopNameExists(this.shop.name)) {
        this.name_error_message =
          'Shop name already exists, Try different name';
      } else {
        stepper.next();
      }
    }
  }
  nameChange() {
    this.shop.name = this.shop.name.split(' ').join('-');
  }

  afterType(stepper: any, type: string) {
    this.shop.type = type;
    stepper.next();
  }

  async saveShop() {
    this.creating = true;
    this.shop.joined = Date.now();
    this.shop.lowercase_name = this.shop.name.toLowerCase();
    this.shop.shop_id = this.db.generateDocId();

    this.shop.bannerImg = await this.storage.uploadFile(
      `Shops/${this.shop.name}/images/banner`,
      this.cropped_banner.base_64_to_image
    );
    this.banner_comp = true;

    this.shop.logo = await this.storage.uploadFile(
      `Shops/${this.shop.name}/images/logo`,
      this.cropped_logo.base_64_to_image
    );

    this.db.saveShop(this.shop).then(() => {
      this.router.navigate([`/${this.shop.name}`]);
    });
  }

  /** 
   🤘🤘🤘🤘🤘🤘🤘🤘

   * Just send a msg when your reading this

   * ⭐⭐⭐ add [(ngModel)] to every input feild with their obkect name 
      Ex: [(ngModel)]="shop.name", There is a example line no 54 inside ./create-shop.component.html
      this is same as value attribute in html dont use value here ✅


   * For Category select, add values to the options  ✅

   * Implement a save function here that passes the data to saveshop function inside DatabaseService
     Your fuction can be called by adding (click)="YOUR_FUNCTION_NAME" inside button element  ✅

   * LITTLE LOGICAL: after upload.percentage is 100, upload.downloadURL will be replaced with a URL automatically
     you need to add the URL to shop.logo. HINT: Implement a if and check whether the progress is 100 else just return
     ## Don't add shop.logo inside the file input in html just keep the input same as it is and inside your function do the above thing  ✅

   * If a user input hase value same as inside the contructer you need to display a dialog box
     saying "Fill out all the feilds", Line No 80 - 88 is a dialog box you can refer it
     ## Dialog box need some UI changes, just continue with the current one  ✅
   
   * Inside the function before passing the data fillout missing feilds in shop 
     such as joindedtime it must be in miliseconds to get it just call Date.now()  ✅

   * docId must must be replaced with a document ID, 
     you can generate a document ID by calling generateDocId() funtion that is inside DatabaseService   ✅


   * after calling the saveShop() function inside check the firestore whether the data has been saved  ✅

   * Just look those function in StorageService and DatabaseService and get a rough idea about it
     it will help you in future of this project,   ✅
     if you understand the function just add a comment   ✅
     

   * If you have any kind of a problem feel free to contact me 👍👍👍  ✅


   ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥  ❤️‍🔥
   */
}
