import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getProfile(){
    return this.httpClient.get<any[]>("http://localhost:2123/api/staff/get");
  }


}
