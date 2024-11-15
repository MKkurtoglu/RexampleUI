import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL= "https://localhost:44300/api/Customers/getAll";
  
  constructor(private httpClient:HttpClient) { }
  getProducts() :Observable<ListResponseModel<Customer>> {
  
  return  this.httpClient.get<ListResponseModel<Customer>>(this.apiURL)
    
  }
}
