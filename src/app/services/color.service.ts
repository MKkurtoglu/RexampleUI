import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService  {

  apiURL= "https://localhost:44300/api/";
  
  constructor(private httpClient:HttpClient) { }
  getAllColor() :Observable<ListResponseModel<Color>> {
    let newPath = this.apiURL + "Colors/getAll";
  return  this.httpClient.get<ListResponseModel<Color>>(newPath)
    
  }


  addColor(color:any):Observable<ResponseModel>{
let newPath = this.apiURL +"Colors/addColor";
return this.httpClient.post<ResponseModel>(newPath,color);
  }


  deleteColor(colorId:number){
    let newPath = this.apiURL+`Colors/deleteColor?id=${colorId}`
    return this.httpClient.delete<ResponseModel>(newPath)
  }

  updateColor(color:any):Observable<ResponseModel>{
    let newPath =this.apiURL+"Colors/updateColor"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
}
