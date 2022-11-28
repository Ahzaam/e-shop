import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StockComponent } from './Components/stock/stock.component';
import { ProductsCarouselComponent } from './Components/products-carousel/products-carousel.component';
import { ProductsGridComponent } from './Components/products-grid/products-grid.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './Components/shop/shop.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { HomeProductsComponent } from './Components/home-products/home-products.component';
import { TeamComponent } from './Components/team/team.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { BannerComponent } from './Components/banner/banner.component';
import { CreateShopComponent } from './Components/create-shop/create-shop.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropComponent } from './Dialogs/image-crop/image-crop.component';
import { ShopAdminComponent } from './Components/shop-admin/shop-admin.component';
import { MatIconModule } from '@angular/material/icon';


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
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule { }
