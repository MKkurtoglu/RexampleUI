import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PayComponent } from "../pay/pay.component";

const routes :Routes=[
    { path: "Arabalar/Kiralamalar/Odeme", component: PayComponent },
    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PayRoutingModule { }