import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './modules/adminModule/brand/brand.component';
import { ColorComponent } from './modules/adminModule/color/color.component';
import { CustomerComponent } from './modules/adminModule/customer/customer.component';
import { CarComponent } from './modules/carModules/car/car.component';
import { RentalsComponent } from './modules/adminModule/rentals/rentals.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent } from './modules/sharedModule/navbar/navbar.component';
import { LeftcategoryComponent } from './modules/sharedModule/leftcategory/leftcategory.component';
import { CarWithImageComponent } from './modules/carModules/car-with-image/car-with-image.component';
import { CarFilterPipe } from './modules/sharedModule/pipes/car-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrandFilterPipe } from './modules/sharedModule/pipes/brand-filter.pipe';
import { ColorFilterPipe } from './modules/sharedModule/pipes/color-filter.pipe';
import { SearchComponent } from './modules/sharedModule/search/search.component';
import { PayComponent } from './modules/payModule/pay/pay.component';
import { RentalSummaryComponent } from './modules/rentalModule/rental-summary/rental-summary.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditBrandComponent } from './modules/adminModule/edit-brand/edit-brand.component';
import { EditColorComponent } from './modules/adminModule/edit-color/edit-color.component';
import { EditCarComponent } from './modules/adminModule/edit-car/edit-car.component';
import { LoginComponent } from './modules/authModule/login/login.component';

import { RegisterComponent } from './modules/authModule/register/register.component';
import { AuthInterceptor } from './Core/interceptor/auth.interceptor';
import { EditProfileComponent } from './modules/userModule/edit-profile/edit-profile.component';
import { EditProfileImageComponent } from './modules/userModule/edit-profile-image/edit-profile-image.component';
import { AdminArabaResimlerComponent } from './modules/adminModule/admin-araba-resimler/admin-araba-resimler.component';
import { FooterComponent } from './modules/sharedModule/footer/footer/footer.component';
import { SharedModule } from './modules/sharedModule/shared/shared.module';
import { UserModule } from './modules/userModule/user/user.module';
import { AdminModule } from './modules/adminModule/admin/admin.module';
import { CarModule } from './modules/carModules/cModule/car.module';
import { PayModule } from './modules/payModule/Mpay/pay.module';
import { AuthModule } from './modules/authModule/auth/auth.module';
import { RentalModule } from './modules/rentalModule/rental/rental.module';
import { CoreModule } from './Core/core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
         
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    UserModule,
    AdminModule,
    CarModule,
CoreModule,
    PayModule,
    AuthModule,
    RentalModule,
    AppRoutingModule,
    BrowserAnimationsModule, // app module içerisine ekledğimiz de diğer module'lerde istifade edecektir
    ToastrModule.forRoot({
      timeOut: 3000, // Bildirimin ekranda kalma süresi (milisaniye cinsinden)
      positionClass: 'toast-bottom-right', // Bildirimin ekranda gösterileceği konum
      preventDuplicates: true, // Aynı mesajların tekrarını engeller
      closeButton: true, // Bildirime kapatma butonu ekler
      progressBar: true, // İlerleme çubuğu gösterir
      progressAnimation: 'increasing', // İlerleme çubuğu animasyonu ('increasing' veya 'decreasing')
      newestOnTop: true, // Yeni bildirimleri üstte gösterir
      tapToDismiss: true // Bildirime tıklanarak kapatılmasını sağlar
    })
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
