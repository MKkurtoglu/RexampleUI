import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, output } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../models/brand';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{
  textFilter:string="";
 selectedComponent: string = ''; // Varsayılan olarak boş
  constructor(private brandService:BrandService,private acivatedRoute: ActivatedRoute,private router: Router,private authService:AuthService) {
  
  
}

  ngOnInit(): void {
    
    
    
  }
  

  showList(component: string) {
    

    this.selectedComponent = component; // Eğer yetkiliyse componenti render et

}
}