import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDTO } from '../models/carDTO';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiURL= "https://localhost:44300/api/";
  
  constructor(private httpClient:HttpClient) { }



  getProducts() :Observable<ListResponseModel<CarDTO>> {
  let newPath=this.apiURL+"Cars/getDetails2"
  return  this.httpClient.get<ListResponseModel<CarDTO>>(newPath)
    
  }

getCarWithByCarId(id:number):Observable<SingleResponseModel<CarDTO>>{
  let newPath = this.apiURL+"Cars/getCarByCarId?id="+id
  return this.httpClient.get<SingleResponseModel<CarDTO>>(newPath)
}


  getAllCarByBrand(brandName:string) :Observable<ListResponseModel<CarDTO>>{
    let newPath=this.apiURL+"Cars/getDetailsByBrand?brandName="+brandName;
    return this.httpClient.get<ListResponseModel<CarDTO>>(newPath);
      }

      getAllCarByColorName(colorName:string) :Observable<ListResponseModel<CarDTO>>{
        let newPath=this.apiURL+"Cars/getAllCarByColorName?colorName="+colorName;
        return this.httpClient.get<ListResponseModel<CarDTO>>(newPath);
          }


          getAllWithImage(brandName:string) : Observable<ListResponseModel<CarDTO>>{
            let newPath = this.apiURL+"Cars/getAllCarWithImage?brandName="+brandName;
            return this.httpClient.get<ListResponseModel<CarDTO>>(newPath); 
          }

          getAllWithImage2() : Observable<ListResponseModel<CarDTO>>{
            let newPath = this.apiURL+"Cars/getAllCarWithImagee";
            return this.httpClient.get<ListResponseModel<CarDTO>>(newPath); 
          }
  // getAllByBrand()



  addCar(car:any):Observable<ResponseModel>{
    let newPath = this.apiURL +"Cars/addCar";
    return this.httpClient.post<ResponseModel>(newPath,car);
      }
    
    
      deleteCar(carId: number): Observable<ResponseModel> {
        const newPath = `${this.apiURL}Cars/deleteCar?id=${carId}`;
        return this.httpClient.delete<ResponseModel>(newPath);
      }
    
      updateCar(car:any):Observable<ResponseModel>{
        let newPath =this.apiURL+"Cars/updateCar"
        return this.httpClient.post<ResponseModel>(newPath,car)
      }
}
