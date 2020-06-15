import { Component, OnInit } from '@angular/core';
import {LibraryService } from '../library.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  books;


  constructor(private libraryService : LibraryService,
              private activatedRoute : ActivatedRoute,
              private location : Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let bookId = params.get('id');
      this.bookDetails(bookId);
    })

  }
  bookDetails(id){this.libraryService.bookDetails(id)
    .subscribe(arg => this.books = arg);
  }
  back(){
    this.location.back();
  }
  
  }

