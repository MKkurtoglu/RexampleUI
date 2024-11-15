import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PayService {
  apiURL= "https://localhost:44300/api/";
  constructor(private httpClient :HttpClient) 
  { }


  sendCardInfo(info: Card): Observable<ResponseModel> {  // Observable olarak dönecek, 'any' veya backend response tipi
    let newPath = this.apiURL + "PaySystem/pay";  // API endpoint
    info.type = Number(info.type);
    return this.httpClient.post<ResponseModel>(newPath, info
    );  // POST isteği gönderiliyor
  }

  // sendCardInfo(info: Card): Observable<ResponseModel> {  // Observable olarak dönecek, 'any' veya backend response tipi
  //   let newPath = this.apiURL + "PaySystem/pay";  // API endpoint
  //   return this.httpClient.post<ResponseModel>(newPath, info,{
  //     headers: { 'Content-Type': 'application/json' }
  //   });  // POST isteği gönderiliyor
  // }


//   verifyCode(code: string): Observable<ResponseModel> {
//     let newPath = this.apiURL + "PaySystem/verifyCode";
//     return this.httpClient.post<ResponseModel>(newPath, JSON.stringify(code), {
//         headers: { 'Content-Type': 'application/json' }
//     });
// }
verifyCode(code: string): Observable<ResponseModel> {
  let newPath = this.apiURL + "PaySystem/verifyCode";

  // Gerekli headers ekleyerek doğru formatta veri gönderiyoruz
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  // İsteği yaparken string'i bir obje olarak gönderiyoruz
  return this.httpClient.post<ResponseModel>(newPath, JSON.stringify(code), { headers: headers });
}
}
