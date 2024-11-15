import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';
import { CarWithImageComponent } from '../car-with-image/car-with-image.component';
import { CarRoutingModule } from './car-routing.module';
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
  declarations: [CarComponent,
    CarWithImageComponent

   
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
  ],
  exports:[
    CarComponent,
    CarWithImageComponent,
   
  ],
  
})
export class CarModule { }
