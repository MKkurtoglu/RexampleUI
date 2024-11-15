import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from '../pay/pay.component';
import { PayRoutingModule } from './pay-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../../sharedModule/shared/shared.module';
import { RentalModule } from '../../rentalModule/rental/rental.module';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthInterceptor } from '../../../Core/interceptor/auth.interceptor';



@NgModule({
  declarations: [PayComponent],
  imports: [
    SharedModule,
   
    PayRoutingModule,
    
    RentalModule,
    
  ],
  exports:[
    PayComponent
  ],
 
})
export class PayModule { }
