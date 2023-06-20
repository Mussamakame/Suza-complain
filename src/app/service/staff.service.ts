import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  getStaff(){
    return this.httpClient.get<any[]>("http://localhost:2123/api/staff/get");
  }

}
