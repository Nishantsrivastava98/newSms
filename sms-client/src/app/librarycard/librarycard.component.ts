import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { LibrarycardService } from '../librarycard.service';
import { LibraryService } from '../library.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { formatDate } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-librarycard',
  templateUrl: './librarycard.component.html',
  styleUrls: ['./librarycard.component.scss']
})
export class LibrarycardComponent implements OnInit {

  @Input() id:any;
  books: any;
  bookCount: any;

  constructor(private route : ActivatedRoute,
    private studentService : StudentService,
    private librarycardService : LibrarycardService,
    private libraryService : LibraryService,
    private messageService : MessageService,) { }

  ngOnInit(): void {

      this.studentBookDetails(this.id);
  }
  studentBookDetails(id){
    this.studentService.studentBookDetails(id)
      .subscribe(data => {
        return this.books = data
      })
      console.log(this.studentService.studentBookDetails(id))
    }
  
  
  
  
    bookSelectionHandler(book){
      //this.bookAvailablity(bookId);
      this.librarycardService.bookAvailablity(book.BookId).subscribe((data) => {
        let count = data[0]["count(*)"];

        if(book.NumberOfBooks > count){
          let checkBookInList=0;
          for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].BookId == book.BookId && this.books[i].ReturnDate == null){
              checkBookInList += 1;
            }
            
          }
          if(checkBookInList == 0){
            this.issueBook(book.BookId).subscribe(()=>this.messageService.showToast('Book Issued Successfully !','success'))
          }
          else{
            this.messageService.showToast('This Book is already issued to you! !','error')
          }
        }
        else{
          this.messageService.showToast('Sorry all book are issued !','error')
        }
      });
    }
  
  
    bookAvailablity(bookId){
      this.librarycardService.bookAvailablity(bookId).subscribe(data =>this.bookCount=data)
    }
  
    issueBook(BookId): Observable<any>{
      let librarycard = {
        'StudentId' : this.id,
        'BookId' : BookId
      }  
      return this.librarycardService.insertIntoLibraryCard(librarycard);
    }
  
  
    returnBook(IssueId){
      let libraryCard = {
        'ReturnDate':null
      }
      libraryCard.ReturnDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
      this.studentService.returnBook(IssueId,libraryCard).subscribe(res=>{
        this.messageService.showToast('Book Returned successfully', 'success');
         
      })
    }
}
