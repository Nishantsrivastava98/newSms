import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = '/api/students';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getStudents(): Observable<any> {
    return this.http.get(this.studentsUrl)
  }
  deleteStudents(id : number) : Observable<any>{
   
    const url = `${this.studentsUrl}/delete/${id}`;
    return this.http.delete(url)
  }
  addStudents(student) : Observable<any>{
    const url =  `${this.studentsUrl}/insert`;
    return this.http.post(url,student,this.httpOptions)
  }
  studentDetails(id : number) : Observable<any>{
    const url = `${this.studentsUrl}/details/${id}`;
    return this.http.get(url)
  }
  updateStudents(id,student) : Observable <any>{
    const url = `${this.studentsUrl}/update/${id}`;
    return this.http.put(url,student,  this.httpOptions)
  }
  constructor(private http : HttpClient) { }
}
