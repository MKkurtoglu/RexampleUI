import { Component } from '@angular/core';
import { RentalService } from '../../../services/rental.service';
import { Rentals } from '../../../models/rentals';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {
  constructor(private rentalService:RentalService) {
  
  
  }
    ngOnInit(): void {
      this.rentalService.getProducts().subscribe(response=>{
        this.data=response.data 
        this.dataloaded=true;
      })
    }
    data : Rentals[]=[];
    dataloaded:boolean=false;
}
