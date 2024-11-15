import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './modules/adminModule/brand/brand.component';
import { CarComponent } from './modules/carModules/car/car.component';
import { ColorComponent } from './modules/adminModule/color/color.component';
import { CustomerComponent } from './modules/adminModule/customer/customer.component';
import { RentalsComponent } from './modules/adminModule/rentals/rentals.component';
import { CarWithImageComponent } from './modules/carModules/car-with-image/car-with-image.component';
import path from 'node:path';
import { RentalSummaryComponent } from './modules/rentalModule/rental-summary/rental-summary.component';
import { PayComponent } from './modules/payModule/pay/pay.component';
import { LoginComponent } from './modules/authModule/login/login.component';

import { EditCarComponent } from './modules/adminModule/edit-car/edit-car.component';
import { authGuard } from './Core/guard/auth.guard';
import { RegisterComponent } from './modules/authModule/register/register.component';
import { EditProfileComponent } from './modules/userModule/edit-profile/edit-profile.component';
import { AdminArabaResimlerComponent } from './modules/adminModule/admin-araba-resimler/admin-araba-resimler.component';
import { CustomPreloadingStrategy } from './Core/Preloading/custom-preloading-strategy';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarWithImageComponent},
  
  
  { path: "admin", loadChildren: () => import('../app/modules/adminModule/admin/admin.module').then(m => m.AdminModule) ,data:{preload:true,preloadDelay:1000}},
  { path: "auth", loadChildren: () => import('../app/modules/authModule/auth/auth.module').then(m => m.AuthModule) },
  // { path: "brand", loadChildren: () => import('../app/modules/').then(m => m.AdminModule) },
  { path: "car", loadChildren: () => import('../app/modules/carModules/cModule/car.module').then(m => m.CarModule) ,data:{preload:true}},
  { path: "pay", loadChildren: () => import('../app/modules/payModule/Mpay/pay.module').then(m => m.PayModule) },
  { path: "rental", loadChildren: () => import('../app/modules/rentalModule/rental/rental.module').then(m => m.RentalModule) ,data:{preload:true,preloadDelay:2000}},
  { path: "user", loadChildren: () => import('../app/modules/userModule/user/user.module').then(m => m.UserModule) },


  
  
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
