import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { ToastrService } from 'ngx-toastr';
import { CarDTO } from '../../../models/carDTO';
import { CarImageService } from '../../../services/car-image.service';
import { CarImage } from '../../../models/carImage';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-admin-araba-resimler',
  templateUrl: './admin-araba-resimler.component.html',
  styleUrl: './admin-araba-resimler.component.css'
})

export class AdminArabaResimlerComponent implements OnInit{
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(response=>{
      console.log("id no " +response["carId"])
      if(response["carId"]){
        console.log(typeof(response["carId"]))
        this.selectedCarId = Number(response["carId"]);
        console.log(this.selectedCarId)
this.getCarByCarId(this.selectedCarId);

      }
    })
  }

selectedCarId:number
car: CarImage[]; 

/**
 *
 */
constructor(private activatedRouter:ActivatedRoute,private carService:CarService,private carImageService:CarImageService,private toastrService:ToastrService) {
  
  
}





getCarByCarId(id: number) {
  this.carImageService.getAllCarImageByCarId(id).subscribe(
    response => {
      if (response.isSuccess && response.data) {
        this.car = response.data;
        if (this.car && this.car.length>0) {
          this.toastrService.success("Resimler mevcut");
        } else {
          this.toastrService.info("Resim eklenmesi lazım");
        }
      } else {
        this.car = null;
        this.toastrService.error("Veri yok veya hatalı");
      }
    },
    error => {
      console.error('API çağrısı sırasında hata oluştu:', error);
      // this.toastrService.error("Veri yüklenirken bir hata oluştu");
      this.car = null;
    }
  );
}



getImageUrl(imagePath: string): string {
  const baseUrl = 'https://localhost:44300/images/';
  const relativePath = imagePath.split('\\').pop(); // Dosya adını alma
  
  console.log(baseUrl+relativePath)
  return `${baseUrl}${relativePath}`;
}


deleteImage(imageId :number){
  console.log("tetiklendi")
this.carImageService.deleteCarImage(imageId).subscribe(response=>{
  if(response.isSuccess){
    this.toastrService.success("Silme İşlemi başarılı bir şekilde gerçekleşti")
    this.getCarByCarId(this.selectedCarId)
  }
},error=>{
  this.toastrService.error(error)
})
}

selectedImage: string | null = null;

openImageInModal(imagePath: string) {
  this.selectedImage = this.getImageUrl(imagePath);
}

closeModal() {
  this.selectedImage = null;
}





}
