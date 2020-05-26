import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private teachersUrl = '/api/teachers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }
  getTeachers(): Observable<any> {
    return this.http.get(this.teachersUrl)
  }
  teacherDetail(id) : Observable<any>{
    const url = `${this.teachersUrl}/detail/${id}`
    return this.http.get(url)
  }

  deleteTeachers(id : number) : Observable<any>{
   
    const url = `${this.teachersUrl}/delete/${id}`;
    return this.http.delete(url)
  }

  addTeachers(teachers) : Observable<any>{
    const url =  `${this.teachersUrl}/addTeachers`;
    return this.http.post(url,teachers,this.httpOptions)
  }

  updateTeacher(id,teachers) : Observable<any>{
    const url =  `${this.teachersUrl}/update/${id}`;
    return this.http.put(url,teachers,this.httpOptions)
  } 
}
