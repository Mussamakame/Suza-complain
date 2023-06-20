import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:2123/api/student/Student';

  constructor(private httpClient: HttpClient) { }
  getStudents(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createStudent(student: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, Student);
  }
  updateStudent(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getStudentList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getStudent(){
    return this.httpClient.get<any[]>("http://localhost:2123/api/student/Student");
  }
}
