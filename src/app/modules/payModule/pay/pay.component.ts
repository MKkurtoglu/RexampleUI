import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/card';
import { PayService } from '../../../services/pay.service';
import { response } from 'express';
import { RentalService } from '../../../services/rental.service';
import { RentalDTO } from '../../../models/rentalDTO';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit {
  /**
   *
   */
  constructor(private payService :PayService,private rentalService :RentalService,private toastr: ToastrService) {
    
    
  }
  ngOnInit(): void {
    this.renTalInfo = history.state.rental;
    this.card = {
      cardNumber: '',
      cardholderName: '',
      expirationMonth: null,
      expirationYear: null,
      cvvCvc: null,
      type: null
    };
  }
  currentYear: number = new Date().getFullYear();
  kodGonderildi: boolean =false;
  card: Card 
no:string
dogrulamaKodu:string
payToken:string
renTalInfo:RentalDTO
formattedCardNumber: string = '';
odemeYap(){
  
this.payService.sendCardInfo(this.card).subscribe(response=>{
  console.log(this.card)
  this.dogrulamaKodu=response.message;
  this.kodGonderildi=true;
  console.log(response);
})
}
dogrulamaKoduGonder(){
  console.log(this.dogrulamaKodu)
  console.log(this.no)
this.payService.verifyCode(this.dogrulamaKodu).subscribe(response=>{
  if(response.isSuccess===false){
this.toastr.error("girilen kod yanlış")
return;

  }

if(response.isSuccess==true){
  this.payToken=response.message;
  console.log(this.payToken)
  console.log(this.renTalInfo)
  this.rentalService.createRental(this.renTalInfo, this.payToken).subscribe(rentalResponse => {
    console.log('Rental Response:', rentalResponse); // Bu satırı ekleyin
    this.toastr.success("kiralama işlemi gerçekleşti. Araba ID:"+this.renTalInfo.carId)
  }, error => {
    console.error('Rental Error:', error); // Hata durumlarını kontrol edin
  });
}
})
}


formatCardNumber() {
  // Sadece sayıları al
  let rawValue = this.formattedCardNumber.replace(/\D/g, '');

  // Kart numarasını 16 hane ile sınırlandır
  if (rawValue.length > 16) {
      rawValue = rawValue.slice(0, 16);
  }

  // Her 4 haneden sonra "-" ekle
  this.formattedCardNumber = rawValue.replace(/(.{4})/g, '$1-').trim();

  // Son "-" işaretini kaldır
  if (this.formattedCardNumber.endsWith('-')) {
      this.formattedCardNumber = this.formattedCardNumber.slice(0, -1);
  }

  // Formatlanmış numarayı asıl kart numarasına ata
  this.card.cardNumber = rawValue;
  this.no=this.card.cardNumber
}
}
