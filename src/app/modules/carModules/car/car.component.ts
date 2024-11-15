import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../../models/brand';
import { BrandService } from '../../../services/brand.service';
import { ColorService } from '../../../services/color.service';
import { Color } from '../../../models/color';
import { CarDTO } from '../../../models/carDTO';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
  textFilter: string="";
  data : CarDTO[]=[];
  brandList:Brand[]=[];
  colorList:Color[]=[];
  selectedBrand: string
  selectedColor: string

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private brandService:BrandService,private colorservice:ColorService,private router: Router) {
  
  
  }
  
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
//         console.log(params["brandName"])
//         if (params["brandName"]) {
//           this.getCarByBrand(params["brandName"]);
//           console.log(this.data)
//         } 
//         if(params["colorName"]){
// this.getAllCarsByColorName(params["colorName"]);
//         }
//         else {
          this.getAllCar();
        // }
      })

this.getBrand();
this.getColor();

    }
    
    
    dataloaded:boolean=false;

    handleTextFilter(filterValue: string) {
      this.textFilter = filterValue;
    }
  
    handleBrandFilter(brand: string) {
      this.selectedBrand = brand;
    }
  
    handleColorFilter(color: string) {
      this.selectedColor = color;
    }
getAllCar()
{
  this.carService.getAllWithImage2().subscribe(response=>{
    this.data=response.data 
    this.dataloaded=true;
    console.log(this.data)
  })
}

getImageUrl(imagePath: string): string {
  const baseUrl = 'https://localhost:44300/images/';
  const relativePath = imagePath.split('\\').pop(); // Dosya adını alma
  
  console.log(baseUrl+relativePath)
  return `${baseUrl}${relativePath}`;
}

getCarByBrand(brandName:string){
      this.carService.getAllCarByBrand(brandName).subscribe(response=>{
      this.data=response.data;
      this.dataloaded=true;
      })
}

getAllCarsByColorName(colorName:string){
  this.carService.getAllCarByColorName(colorName).subscribe(response=>{
    this.data=response.data
    this.dataloaded=true
  })
}
selectCar(selectedCar: CarDTO) {
  this.router.navigate(['/Arabalar/Kiralamalar'], { state: { car: selectedCar } });
  console.log(selectedCar)
}
getBrand(){
  this.brandService.getProducts().subscribe(response=>{
    this.brandList=response.data;
    
  })
}

getColor(){
  this.colorservice.getAllColor().subscribe(response=>{
    this.colorList = response.data;
    
  })
}

}
