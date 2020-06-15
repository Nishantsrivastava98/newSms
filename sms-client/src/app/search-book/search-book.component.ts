import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { LibraryService } from '../library.service';
import { Output, EventEmitter } from '@angular/core'
import { map, switchMap, tap, debounceTime, distinctUntilChanged} from 'rxjs/operators';



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
  booksMap;

  @Output() onBookSelection = new EventEmitter();
  selectedBook: any;



  constructor(
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
            tap((response) => {
              this.booksMap = new Map();
              response.forEach(element => {
                this.booksMap.set(element.BookId, element);
              });
            }),
            map((response:any[]) => response.map((item) => {
             
              return {value: item.BookId, label: item.BookName + ' - ' + item.Author, count:item.NumberOfBooks  }
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
      this.onBookSelection.emit(this.booksMap.get(event));
    }

  }

}

