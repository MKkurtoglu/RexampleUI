import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { loginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { UpdateUserDto } from '../models/updateUserDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService,private router:Router,@Inject(PLATFORM_ID) private platformId: Object) {
    if (this.isBrowser()) {
      const token = localStorage.getItem('token');
      if (token) {
        this.isLoggedIn$.next(true);
      }
    }
   }

  apiURL= "https://localhost:44300/api/";

  
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(login:loginModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath =this.apiURL+"Auth/login";
   return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,login).pipe(tap(response=>{
    if(response.isSuccess){
      console.log("işlem başarılı")
      this.localStorageService.addLocalStorage("token", response.data.token);
      this.isLoggedIn$.next(true);
      this.isLoggedInSubject.next(true)
    }
    console.log("login olma işlemi başarısız")
   }));
  
   }
   updateUserProfile(updateUserDto :UpdateUserDto):Observable<ResponseModel>{
    let newPath = this.apiURL +"Auth/updateUser" 
    return this.httpClient.post<ResponseModel>(newPath,updateUserDto)
  }

 isAuthenticated(){
    if(this.localStorageService.getItemLocal("token")){
      return true
    }
    else{
     return false
    }
  }

  logout(){
    this.localStorageService.deleteLocalStorage("token");
    this.isLoggedInSubject.next(false);
   this.isLoggedIn$.next(false)

  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
