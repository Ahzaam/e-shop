// ANGULAR CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// THIRD-PARTY MODULES
import { ImageCropperModule } from 'ngx-image-cropper';


// FIREBASE MODULES
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';

// MATERIAL 
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';



// COMPONENTS
import { StockComponent } from './Components/stock/stock.component';
import { ProductsCarouselComponent } from './Components/products-carousel/products-carousel.component';
import { ProductsGridComponent } from './Components/products-grid/products-grid.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeProductsComponent } from './Components/home-products/home-products.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { TeamComponent } from './Components/team/team.component';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { CreateShopComponent } from './Components/create-shop/create-shop.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopAdminComponent } from './Components/shop-admin/shop-admin.component';
import { ImageCropComponent } from './Dialogs/image-crop/image-crop.component';
import { AlertComponent } from './Dialogs/alert/alert.component';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminInvoiceComponent } from './Components/admin-invoice/admin-invoice.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { NewProductComponent } from './Dialogs/new-product/new-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StockComponent,
    ProductsCarouselComponent,
    ProductsGridComponent,
    AuthenticateComponent,
    UserProfileComponent,
    ShopComponent,
    ViewProductComponent,
    HomeProductsComponent,
    TeamComponent,
    BannerComponent,
    CreateShopComponent,
    ImageCropComponent,
    ShopAdminComponent,
    AlertComponent,
    AdminOrdersComponent,
    AdminDashboardComponent,
    AdminInvoiceComponent,
    AdminProductsComponent,
    StarRatingComponent,
    NewProductComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    provideAuth(() => getAuth()),
    MatStepperModule,
    ImageCropperModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTabsModule


  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule { }
