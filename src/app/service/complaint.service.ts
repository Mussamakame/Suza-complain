import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private httpClient: HttpClient) { }

  getComplant(){
    return this.httpClient.get<any[]>("http://localhost:2123/api/complant/Complant");
  }
  
}
