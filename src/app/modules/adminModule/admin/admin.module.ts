import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { EditColorComponent } from '../edit-color/edit-color.component';
import { EditCarComponent } from '../edit-car/edit-car.component';
import { AdminArabaResimlerComponent } from '../admin-araba-resimler/admin-araba-resimler.component';
import { ColorComponent } from '../color/color.component';
import { CustomerComponent } from '../customer/customer.component';
import { RentalsComponent } from '../rentals/rentals.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarFilterPipe } from '../../sharedModule/pipes/car-filter.pipe';
import { BrandFilterPipe } from '../../sharedModule/pipes/brand-filter.pipe';
import { ColorFilterPipe } from '../../sharedModule/pipes/color-filter.pipe';
import { BrandComponent } from '../brand/brand.component';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthInterceptor } from '../../../Core/interceptor/auth.interceptor';
import { SharedModule } from '../../sharedModule/shared/shared.module';



@NgModule({
  declarations: [
    EditBrandComponent,
    EditColorComponent,
    EditCarComponent,
    AdminArabaResimlerComponent,
    ColorComponent,
    CustomerComponent,
    RentalsComponent,
BrandComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[
    
  ],
  providers: [
   
  ],
})
export class AdminModule { }
