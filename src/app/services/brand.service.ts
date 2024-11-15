import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiURL= "https://localhost:44300/api/";
  
  constructor(private httpClient:HttpClient) {
   
  }
  getProducts() :Observable<ListResponseModel<Brand>> {
  let newPath=this.apiURL+"Brands/getAll"
  return  this.httpClient.get<ListResponseModel<Brand>>(newPath)
    
  }

  addBrand(brand:any):Observable<ResponseModel>{
    let newPath = this.apiURL +"Brands/addBrand";
    return this.httpClient.post<ResponseModel>(newPath,brand);
      }
    
    
      deleteBrand(brandId:number){
        let newPath = this.apiURL+"Brands/deleteBrand?id="+brandId
        return this.httpClient.delete<ResponseModel>(newPath)
      }
    
      updateBrand(brand:any):Observable<ResponseModel>{
        let newPath =this.apiURL+"Brands/updateBrand"
        return this.httpClient.post<ResponseModel>(newPath,brand)
      }
}
