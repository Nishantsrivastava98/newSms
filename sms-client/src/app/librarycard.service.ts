import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrarycardService {
  private librarycardUrl = '/api/librarycard';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) { }


  insertIntoLibraryCard(librarycard): Observable<any>{
    const url = `${this.librarycardUrl}/insert`;
    return this.httpClient.post(url,librarycard,this.httpOptions)
  }

  updateLibraryCard(id,librarycard): Observable<any>{
    const url = `${this.librarycardUrl}/update/${id}`;
    return this.httpClient.put(url,librarycard,this.httpOptions)

  }
}
