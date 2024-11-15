import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftcategoryComponent } from '../leftcategory/leftcategory.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { BrandFilterPipe } from '../pipes/brand-filter.pipe';
import { CarFilterPipe } from '../pipes/car-filter.pipe';
import { ColorFilterPipe } from '../pipes/color-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftcategoryComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LeftcategoryComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule

  ]
})
export class SharedModule { }
