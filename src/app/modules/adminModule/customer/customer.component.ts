import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private customerService:CustomerService) {
  
  
  }
    ngOnInit(): void {
      this.customerService.getProducts().subscribe(response=>{
        this.data=response.data 
        this.dataloaded=true;
      })
    }
    data : Customer[]=[];
    dataloaded:boolean=false;
}
