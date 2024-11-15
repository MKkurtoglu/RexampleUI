import { Component, Input, OnInit } from '@angular/core';
import { CarDTO } from '../../../models/carDTO';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RentalDTO } from '../../../models/rentalDTO';

@Component({
  selector: 'app-rental-summary',
  templateUrl: './rental-summary.component.html',
  styleUrl: './rental-summary.component.css'
})
export class RentalSummaryComponent implements OnInit{
  startDate: Date;
  endDate: Date;
  rentTime: string=this.rentSetTime;
  returnTime: string=this.returnSetTime;
  rentTimeHour: string;
rentTimeMinute: string;
returnTimeHour:string
returnTimeMinute:string
  hours: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
minutes: string[] = ['00', '30'];
  ngOnInit(): void {
    this.selectedCar = history.state.car;
    console.log(this.selectedCar)
   
}
  /**
   *
   * 
   */
 /**
  *
  */
 selectedCar: CarDTO;
 rentalCar:RentalDTO = new RentalDTO();
 constructor(private router : Router,private toastr: ToastrService) {
  
  
 }
 combineDateAndTime() {
  // Tarih ve saat bilgilerini birleştirip ISO formatına dönüştürme
  

  let rentDateTime = new Date(this.startDate + 'T' + this.rentTimeHour + ':' + this.rentTimeMinute);
  let returnDateTime = new Date(this.endDate + 'T' + this.returnTimeHour + ':' + this.returnTimeMinute);

  this.rentalCar.rentDate = new Date(rentDateTime.toISOString().slice(0, 19));
  this.rentalCar.returnDate = new Date(returnDateTime.toISOString().slice(0, 19));
  
  // this.rentalCar.rentDate = rentDateTime;
  // this.rentalCar.returnDate = returnDateTime;
  this.rentalCar.carId = this.selectedCar.carId;  
  this.rentalCar.customerId = 2;  
  this.rentalCar.status = true;  

  // İlgili işlemi gerçekleştirme
  console.log(this.rentalCar);
}
get rentSetTime(): string {
  return `${this.rentTimeHour}:${this.rentTimeMinute}`;
}
get returnSetTime():string{
  return `${this.returnTimeHour}:${this.returnTimeMinute}`;
}
   confirmRental() {
    let rentDateTime = new Date(this.startDate + 'T' + this.rentTime);
    let returnDateTime = new Date(this.endDate + 'T' + this.returnTime);
    if (new Date() > rentDateTime) {
      this.toastr.error("Kiralama başlangıç tarihi ve saati mevcut tarih ve saatten önce olamaz");
      return;
    }
  
    if (!this.endDate || !this.returnTime) {
      this.toastr.error("Kiralama bitiş tarihi ve saatini girmek zorundasınız");
      return;
    }
  
    if (rentDateTime >= returnDateTime) {
      this.toastr.error("Bitiş tarihi ve saati kiralama başlangıç tarihi ve saatinden önce olamaz");
      return;
    }

    this.createRental()
  }
  getImageUrl(imagePath: string): string {
    const baseUrl = 'https://localhost:44300/images/';
    const relativePath = imagePath.split('\\').pop(); // Dosya adını alma
    
    console.log(baseUrl+relativePath)
    return `${baseUrl}${relativePath}`;
  }

 createRental(){
  

this.rentalCar.rentDate=this.startDate;
this.rentalCar.returnDate=this.endDate;
this.rentalCar.carId=this.selectedCar.carId;
this.rentalCar.customerId=2;
this.router.navigate(['/Arabalar/Kiralamalar/Odeme'], { state: { rental: this.rentalCar } });

 }

  

  // CarWithImageComponent'den gelen veriyi yakalayan fonksiyon
  // handleCarData(car: CarDTO) {
  //   this.selectedCar = car; // Gelen aracı saklıyoruz
  //   console.log('Seçilen araç:', this.selectedCar);
  // }
}
