import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarComponent } from "../car/car.component";
import { CarWithImageComponent } from "../car-with-image/car-with-image.component";

const routes :Routes=[
    {path:"Arabalar",component:CarComponent},
    {path:"Markalar/Arabalar/:brandName",component:CarComponent},  
  {path:"Renkler/Arabalar/:colorName",component:CarComponent},
  {path:"Markalar/Arabalar/Resimler/:brandName",component:CarWithImageComponent},
  { path: "Markalar/Arabalar/Resimler/:selectedBrand/:selectedColor", component: CarWithImageComponent },
    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CarRoutingModule { }