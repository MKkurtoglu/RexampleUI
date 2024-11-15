import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDto } from '../models/userDto';
import { UpdateUserDto } from '../models/updateUserDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient :HttpClient) { }

  apiURL= "https://localhost:44300/api/";




  getUserProfile():Observable<SingleResponseModel<UserDto>>{
let newPath = this.apiURL +"Users/getProfileUser"
return this.httpClient.get<SingleResponseModel<UserDto>>(newPath)
  }


  



  
}
