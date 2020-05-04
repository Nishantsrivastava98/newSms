import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { LibraryService } from '../library.service';
import { Output, EventEmitter } from '@angular/core'
import { map, switchMap, tap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  Loading = false;
  open : boolean;
  selectedBookId;
  searchedBooks :Observable<any[]>;
  inputCtrl = new FormControl();

  @Output() onBookSelection = new EventEmitter();



  constructor(private http : HttpClient,
              private libraryService : LibraryService
  ) {

   this.searchedBooks = this.inputCtrl.valueChanges
    .pipe(

      tap(() => this.Loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term === '') {
          this.open = false;
          return of([]);
        }
        else{
          return this.libraryService.searchBook(term).pipe(
            map((response:any[]) => response.map((item) => {
              return {value: item.BookId, label: item.BookName + ' - ' + item.Author }
            }))
          );
        }
      }),
      tap(() => this.Loading = false),

    );
   }

  ngOnInit(): void {
  }
  openChange(isOpen: boolean) {
    if (isOpen && !this.inputCtrl.value) {
      return;
    }
    this.open = isOpen;
  }
  fireShowBook(event){ 
    if(event){
      this.onBookSelection.emit(event);
    }

  }

}

