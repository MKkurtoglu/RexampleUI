import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Rentals } from '../models/rentals';
import { RentalDTO } from '../models/rentalDTO';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiURL= "https://localhost:44300/api/";
  
  constructor(private httpClient:HttpClient) { }
  getProducts() :Observable<ListResponseModel<Rentals>> {
  let newPath=this.apiURL+"Rentals/getAll"
  return  this.httpClient.get<ListResponseModel<Rentals>>(newPath)
    
  }


  createRental(rental: RentalDTO, token: string): Observable<ResponseModel> {
    let newPath = this.apiURL + "Rentals/addRental";
  
    // Token'ı Header'a eklemek için HttpHeaders kullanıyoruz
    let headers = new HttpHeaders().set('VerificationToken', token);
  
    // Http seçeneklerini ayarlıyoruz ve header'ı ekliyoruz
    let options = { headers: headers };
  
    return this.httpClient.post<ResponseModel>(newPath, rental, { headers: headers });
  }
}
