import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.scss']
})
export class BookInsertComponent implements OnInit {
  isEdit : Boolean = false;
  showTopToast = false;
  books = {
    "BookId" : "",
    "BookName" : "",
    "Author" : "",
    "NumberOfBooks":""
  }

  constructor(private libraryService : LibraryService,
              private route : ActivatedRoute,
              private messageService : MessageService,
              private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.isEdit = true;
        this.getDetails(id);
      }
    })
  }
  getDetails(id){
    this.libraryService.bookDetails(id)
      .subscribe(arg => this.books = arg);
    
  }
  Books(): void {
    if(this.isEdit){
      //make update call
      this.libraryService.updateBooks(this.books.BookId,this.books)
        .subscribe(res => {
          this.messageService.showToast('Student Updated Successfully', 'success');
          this.router.navigateByUrl(`/library/details/${this.books.BookId}`);

        });
    }
    else {
      this.libraryService.addBooks(this.books)
        .subscribe(res => {
          this.messageService.showToast('Student Added Successfully', 'success');
          this.router.navigateByUrl(`/details/${res.rows[1][0]["LAST_INSERT_ID()"]}`);

        });

    
    }

    
  }

}
