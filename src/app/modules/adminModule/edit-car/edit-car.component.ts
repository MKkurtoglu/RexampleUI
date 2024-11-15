import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maxYearValidator } from '../../../validators/custom-validators';
import { CarDTO } from '../../../models/carDTO';
import { ColorService } from '../../../services/color.service';
import { BrandService } from '../../../services/brand.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CarImageService } from '../../../services/car-image.service';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent implements OnInit{

  @Input() selectedComponent: string = ''; // Seçilen liste türü
  dataloaded: boolean = false; // Veri yüklendiğini kontrol eden flag
  isAddingOrEditing: boolean = false; // Ekleme veya düzenleme modunda olup olmadığını kontrol eden flag
  carForm: FormGroup; // Reactive Form için FormGroup
  isEditing: boolean = false;
  cars: CarDTO[] = []; // Arabaların listesi
  carToEdit: any = null; // Düzenlenecek araba
  brands: any[] = [];
  colors: any[] = [];
  ngOnInit(): void {
    this.getAllCar();
    this.getAllBrand();
  this.getAllColor();
  }
/**
 *
 */
constructor(private carService:CarService,private carImageService:CarImageService,private toastrService:ToastrService,private formBuilder: FormBuilder,private colorService:ColorService,private brandService:BrandService) {
  this.carForm = this.formBuilder.group({
    brandId: [Number, Validators.required],
    colorId: [Number, Validators.required],
    modelYear: [Number, [Validators.required, maxYearValidator(4)]],
    dailyPrice: [Number, [Validators.required, Validators.min(0)]],
    description: ['', [Validators.required]]
  })
  
}



deleteCar(carId:any){
  this.carService.deleteCar(carId).subscribe(response=>{
    if(response.isSuccess){
      this.toastrService.info("Seçilen "+carId+" ID numaralı araç silinmiştir")
      this.loadCars();
    }
    else{
      this.toastrService.error("Araç silinememiştir.")
    }
  })
  console.log(carId)
console.log(typeof(carId))
}


onFileChange(event: any,carId: number) {
  const file = event.target.files[0];
  if (file) {
    
      this.addCarImage(file,carId); // Ekleme işlemi
    }
  }

addCarImage(file:File,carId:number){
  console.log(carId)
this.carImageService.addCarImage(file,carId).subscribe(response=>{
  if(response.isSuccess){
    this.toastrService.success("Resim Eklenmiştir.")
  }
  
},error=>{
  this.toastrService.error(error.message);
})
}
getAllCar()
{
  this.carService.getAllWithImage2().subscribe(response=>{
    this.cars=response.data 
    this.dataloaded=true;
    console.log(this.cars)
  })
}
showAdd(){
  this.isEditing = false;
  this.isAddingOrEditing=true;
  
  
 
  console.log(this.isAddingOrEditing)
}
backandreset(){
  this.carForm.reset();
  this.isAddingOrEditing=false;
}
addCar(car: any) {
  console.log(car);
  this.carService.addCar(car).subscribe(
    response => {
      if (response.isSuccess) {
        this.toastrService.success("Araç eklenmiştir.");
      }
    },
    error => {
      console.log(error);
      if (error.status === 403) {
        // 403 Forbidden yetki hatası için mesaj
        this.toastrService.error(error.error.Message || "Yetkiniz yok.", "Yetki Hatası");
      } else if (error.error && Array.isArray(error.error.Error)) {
        // Validation hatalarını kullanıcıya göster
        error.error.Error.forEach((err: any) => {
          if (err.PropertyName && this.carForm.get(err.PropertyName)) {
            this.carForm.get(err.PropertyName)?.setErrors({ customError: err.ErrorMessage });
            this.toastrService.error(err.ErrorMessage, "Doğrulama Hatası");
          }
        });
      } else {
        // Eğer başka bir hata tipi olursa
        this.toastrService.error(error.error.Message || "Bilinmeyen bir hata oluştu", "Hata");
      }
    }
  );
}


updateCar(car:any){
this.carService.updateCar(car).subscribe(response=>{
  if(response.isSuccess){
    this.toastrService.success("Güncelleme İşlem başarılı")
  }
  else{
    this.toastrService.error("Araba güncellemesi başarısız")
  }
},responseError=>{
  if (responseError.error && responseError.error.Error && Array.isArray(responseError.error.Error)) {
    // Hata mesajlarını kullanıcıya göster
    responseError.error.Error.forEach((error: any) => {
      if (error.PropertyName && this.carForm.get(error.PropertyName)) {
        this.carForm.get(error.PropertyName)?.setErrors({ customError: error.ErrorMessage });
      }
      this.toastrService.error(error.ErrorMessage, "Doğrulama Hatası");
    });
  } else {
    // Eğer başka bir hata tipi olursa
    this.toastrService.error("Bilinmeyen bir hata oluştu", "Hata");
  }
})
}

showAddForm() {
  this.isEditing = false;
  this.getAllBrand();
  this.getAllColor();
  this.carForm.reset(); // Formu temizle
}

editCar(car: any) {
  this.isAddingOrEditing=true
  this.isEditing = true;
  let selectedCarId = car.carId; // Seçili arabanın ID'sini sakla
  
  // Eğer formda carId alanı yoksa ekle
  if (!this.carForm.contains('carId')) {
    this.carForm.addControl('carId', this.formBuilder.control(car.carId));
  }
  const selectedBrand = this.brands.find(brand => brand.brandName === car.brandName);
  const selectedColor = this.colors.find(color => color.colorName === car.colorName);
if (selectedBrand || selectedColor) {
  this.carForm.patchValue({
    carId: car.carId,
    brandId: selectedBrand.brandId,
    colorId: selectedColor.colorId,
    modelYear: car.modelYear,
    dailyPrice: car.dailyPrice,
    description: car.description
  }); // Mevcut araç bilgilerini form alanlarına yükle
  console.log(Object.assign({},this.carForm.value))
}
}


onSubmit() {
  if (this.carForm.valid) {
    const carData = this.carForm.value;
    // Araç ekleme veya güncelleme işlemi
    if (this.isEditing) {
      this.carService.updateCar(carData).subscribe(() => {
        this.loadCars(); // Verileri tekrar yükleyin
        this.backandreset(); // Formu sıfırlayın ve geri dönün
      });
    } else {
      this.carService.addCar(carData).subscribe(() => {
        this.loadCars(); // Verileri tekrar yükleyin
        this.backandreset(); // Formu sıfırlayın ve geri dönün
      });
    }
  }
}
loadCars() {
  this.carService.getAllWithImage2().subscribe(cars => {
    this.cars = cars.data;
  });
}
getAllBrand(){
  this.brandService.getProducts().subscribe(response=>{
    this.brands=response.data
  })

}

getAllColor(){
  this.colorService.getAllColor().subscribe(response=>{
    this.colors=response.data
    console.log(response.data)
  })
}

}
