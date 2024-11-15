import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiURL= "https://localhost:44300/api/";

  constructor(private httpClient :HttpClient) { }



  addCarImage(file :File,carId:number):Observable<ResponseModel>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('id', carId.toString());

    const newPath = this.apiURL + "CarImages/addCarImage";
return this.httpClient.post<ResponseModel>(newPath,formData);
  }



  updateCarImage(file:File,imageId:number):Observable<ResponseModel>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('id', imageId.toString());

    const newPath = this.apiURL + "CarImages/updateCarImage";
   return this.httpClient.post<ResponseModel>(newPath,formData);


  }


  deleteCarImage(imageId:number):Observable<ResponseModel>{
    const newPath = this.apiURL + "CarImages/deleteCarImage?imageId="+imageId;

    return this.httpClient.post<ResponseModel>(newPath,null)

  }

  getAllCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
let newPath = this.apiURL+"CarImages/getAllImageByCar?carId="+carId
   return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
