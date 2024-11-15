import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RentalSummaryComponent } from "../rental-summary/rental-summary.component";
import { authGuard } from "../../../Core/guard/auth.guard";

const routes :Routes=[
    { path: "Arabalar/Kiralamalar", component: RentalSummaryComponent },
    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RentalRoutingModule { }