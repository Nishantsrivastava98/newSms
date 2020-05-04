import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
 private libraryUrl = '/api/library';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
  getBooks(): Observable<any>{
    return this.http.get(this.libraryUrl)
  }
  updateBooks(id,books): Observable<any>{
    const url = `${this.libraryUrl}/update/${id}`;
    return this.http.put(url,books,this.httpOptions)
  }
  addBooks(books): Observable<any>{
    const url = `${this.libraryUrl}/insert`;
    return this.http.post(url,books,this.httpOptions)
  }
  deleteBooks(id): Observable<any>{
    const url = `${this.libraryUrl}/delete/${id}`;
    return this.http.delete(url)                                   
  }
  bookDetails(id : number) : Observable<any>{
    const url = `${this.libraryUrl}/details/${id}`;
    return this.http.get(url)
  }
  searchBook(query : string) : Observable<any[]>{
    const url = `${this.libraryUrl}/search/${query}`;
    return this.http.get<any[]>(url)
  }

  constructor(private http : HttpClient) { }
}
