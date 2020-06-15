import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherconfigurationService {
  private teachersconfigurationUrl = '/api/teacherconfiguration';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }
  getTeacherconfiguration(): Observable<any> {
    return this.http.get(this.teachersconfigurationUrl)
  }

  deleteTeacherconfiguration(id : number) : Observable<any>{
   
    const url = `${this.teachersconfigurationUrl}/delete/${id}`;
    return this.http.delete(url)
  }

  addTeacherconfiguration(teachersconfiguration) : Observable<any>{
    const url =  `${this.teachersconfigurationUrl}/insert`;
    return this.http.post(url,teachersconfiguration,this.httpOptions)
  }

  updateTeacherconfiguration(id,teachersconfiguration) : Observable<any>{
    const url = `${this.teachersconfigurationUrl}/update/${id}`;
    return this.http.put(url,teachersconfiguration,this.httpOptions)
  }

  searchTeacher(query) : Observable<any>{
    const url = `/api/teachers/search/${query}`;
    return this.http.get(url);
  }
  searchSubject(query) : Observable<any>{
    const url = `/api/subjects/search/${query}`;
    return this.http.get(url);
  }
}
