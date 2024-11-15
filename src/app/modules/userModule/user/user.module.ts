import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { EditProfileImageComponent } from '../edit-profile-image/edit-profile-image.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../sharedModule/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthInterceptor } from '../../../Core/interceptor/auth.interceptor';



@NgModule({
  declarations: [
    EditProfileComponent,
    EditProfileImageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
   SharedModule
  ],
  
})
export class UserModule { }
