import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { CreateShopComponent } from './Components/create-shop/create-shop.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { TeamComponent } from './Components/team/team.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent, title: 'Shop' },
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthenticateComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'team', component: TeamComponent },
  { path: 'product', component: ViewProductComponent },
  { path: 'shop/new', component: CreateShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
