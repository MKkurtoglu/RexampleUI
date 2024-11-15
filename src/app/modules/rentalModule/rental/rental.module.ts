import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalSummaryComponent } from '../rental-summary/rental-summary.component';
import { RentalRoutingModule } from './rental-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ColorFilterPipe } from '../../sharedModule/pipes/color-filter.pipe';
import { BrandFilterPipe } from '../../sharedModule/pipes/brand-filter.pipe';
import { CarFilterPipe } from '../../sharedModule/pipes/car-filter.pipe';
import { SharedModule } from '../../sharedModule/shared/shared.module';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthInterceptor } from '../../../Core/interceptor/auth.interceptor';



@NgModule({
  declarations: [RentalSummaryComponent
    
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
   
    
    SharedModule,
    
  ],
  exports:[
    RentalSummaryComponent
  ],
  
})
export class RentalModule { }
