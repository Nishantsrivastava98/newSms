import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ClassroomService {
  classroomUrl = '/api/classroom';


  constructor(private httpClient: HttpClient) { }
  getStudents(id) : Observable<any>{
    const url = `${this.classroomUrl}/students/${id};`
    return this.httpClient.get(url,id)
  }
  classroomList(): Observable<any>{
    const url =  `${this.classroomUrl}`
    return this.httpClient.get(url)
  }
}

