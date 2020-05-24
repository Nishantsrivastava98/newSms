import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjectstsUrl = '/api/subjects';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient) { }
  getSubjects(): Observable<any> {
    return this.http.get(this.subjectstsUrl)
  }

  deleteSubjects(id : number) : Observable<any>{
   
    const url = `${this.subjectstsUrl}/delete/${id}`;
    return this.http.delete(url)
  }

  addSubjects(subjects) : Observable<any>{
    const url =  `${this.subjectstsUrl}/addSubjects`;
    return this.http.post(url,subjects,this.httpOptions)
  }

  updateSubjects(id,subjects) : Observable<any>{
    const url = `${this.subjectstsUrl}/update/${id}`;
    return this.http.put(url,subjects,this.httpOptions)
  }
}
