import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { CreateShopComponent } from './Components/create-shop/create-shop.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { TeamComponent } from './Components/team/team.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { ShopAdminComponent } from './Components/shop-admin/shop-admin.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop',
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthenticateComponent, canActivate: [!AuthGuard] },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'team', component: TeamComponent },
  { path: 'product', component: ViewProductComponent },
  {
    path: 'shop/new',
    component: CreateShopComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: ShopAdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
