import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "../edit-profile/edit-profile.component";
import { authGuard } from "../../../Core/guard/auth.guard";

const routes :Routes=[
    { path: "profil-düzenle", component: EditProfileComponent,canActivate:[authGuard] },

    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }