import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthenticateComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
