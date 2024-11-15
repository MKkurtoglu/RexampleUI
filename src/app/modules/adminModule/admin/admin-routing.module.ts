import { RouterModule, Routes } from "@angular/router";
import { AdminArabaResimlerComponent } from "../admin-araba-resimler/admin-araba-resimler.component";
import { BrandComponent } from "../brand/brand.component";
import { authGuard } from "../../../Core/guard/auth.guard";
import { EditCarComponent } from "../edit-car/edit-car.component";
import { CustomerComponent } from "../customer/customer.component";
import { RentalsComponent } from "../rentals/rentals.component";
import { NgModule } from "@angular/core";

const routes :Routes=[
    {path:"",pathMatch:"full",component:BrandComponent},

    {path:"Markalar",component:BrandComponent,canActivate:[authGuard]},

    { path: "Admin/Arabalar/Resimler/:carId", component: AdminArabaResimlerComponent ,canActivate:[authGuard]},
    {path:"Admin/Arabalar/Resimler",component:EditCarComponent,canActivate:[authGuard]},
    {path:"Kiralamalar",component:RentalsComponent,canActivate:[authGuard]},
    {path:"Müşteriler",component:CustomerComponent,canActivate:[authGuard]},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }