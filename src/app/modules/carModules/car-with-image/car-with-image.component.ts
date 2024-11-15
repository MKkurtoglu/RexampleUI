import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDTO } from '../../../models/carDTO';
import { Brand } from '../../../models/brand';
import { Color } from '../../../models/color';
import { BrandService } from '../../../services/brand.service';
import { ColorService } from '../../../services/color.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-car-with-image',
  templateUrl: './car-with-image.component.html',
  styleUrl: './car-with-image.component.css'
})
export class CarWithImageComponent implements OnInit {
/**
 *
 */textFilter:string
selectedBrand: string
selectedColor: string
  brandList:Brand[]=[];
  colorList:Color[]=[];
data:CarDTO[]=[];
dataloaded:boolean=false; 

constructor(private carservice:CarService,private activatedRoute:ActivatedRoute,private brandService:BrandService,private colorservice:ColorService,private router: Router) {

  
}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    
    
    if(params["selectedBrand"] && ["selectedColor"])
      {
        console.log("bu car-with sayfası")
    this.selectedBrand=params["selectedBrand"]
          
    console.log(params["selectedBrand"])
    console.log(params["selectedColor"])
    console.log(this.selectedBrand)
    console.log(this.selectedColor)
    this.getAllCarWithImage2();
    
    
     this.selectedColor=params["selectedColor"] 
    }


  })
 


}


handleTextFilter(filterValue: string) {
  this.textFilter = filterValue;
}

handleBrandFilter(brand: string) {
  this.selectedBrand = brand;
}

handleColorFilter(color: string) {
  this.selectedColor = color;
}
getAllCarWithImage(brandName: string): void {
  this.carservice.getAllWithImage(brandName).pipe(
    switchMap(response => {
      // Eğer response.data yoksa ya da boş bir liste ise ikinci API çağrısını yap
      if ( response.data.length === 0) {
        
        return this.carservice.getAllWithImage2();  // İkinci API çağrısını Observable olarak döndür
      } else {
        // Eğer geçerli bir sonuç varsa, mevcut response'u Observable'a sarıp döndür
        return of(response);
      }
    })
  ).subscribe(response => {
    this.data = response.data;
    this.dataloaded = true;
  }, error => {
    console.error("Error fetching car data:", error);
  });
}

getAllCarWithImage2(){
  this.carservice.getAllWithImage2().subscribe(response=>{
    this.data=response.data;
    this.dataloaded=true
  })
}

getImageUrl(imagePath: string): string {
  const baseUrl = 'https://localhost:44300/images/';
  const relativePath = imagePath.split('\\').pop(); // Dosya adını alma
  
  console.log(baseUrl+relativePath)
  return `${baseUrl}${relativePath}`;
}
getBrand(){
  this.brandService.getProducts().subscribe(response=>{
    this.brandList=response.data;
    
  })
}
selectCar(selectedCar: CarDTO) {
  this.router.navigate(['/Arabalar/Kiralamalar'], { state: { car: selectedCar } });
  console.log(selectedCar)
}
getColor(){
  this.colorservice.getAllColor().subscribe(response=>{
    this.colorList=response.data
  })
}
}
