import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit{

  constructor(private httpClient :HttpClient) { }

  apiURL= "https://localhost:44300/api/";


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath=this.apiURL+"Auth/register"
   return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel)
  }



}
