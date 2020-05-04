import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';
import { LibrarycardService } from '../librarycard.service'
import {Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { formatDate } from '@angular/common';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student;
  books: any;

  constructor(
    private studentService : StudentService,
    private route : ActivatedRoute,
    private librarycardService : LibrarycardService,
    private messageService : MessageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let studentId = params.get('id');
      console.log('studentId: ', studentId);
      this.studentDetails(studentId);
      this.studentBookDetails(studentId);
    });
    
  }


   studentDetails(id): void {
    this.studentService.studentDetails(id)
    .subscribe(dataFromServer => this.student = dataFromServer);
  }
  studentBookDetails(id){
    
    this.studentService.studentBookDetails(id)
    .subscribe(data => {
      console.log(data);
      return this.books = data
    });

    console.log(this.studentService.studentBookDetails(id))
  }
  bookSelectionHandler(bookId){
    console.log('inside parent',bookId);
    let issueId = this.issueBook(bookId).subscribe(()=>this.messageService.showToast('Book Issued Successfully !','success'))
    /*.pipe(
      tap(response=>{
        this.messageService.showToast('Book Issued Successfully','success')
      }),
      switchMap(result => 'isssueId'),
      catchError(err => {
        
        console.error('Error occured:', err);
        this.messageService.showToast('Something went wrong !', 'error')
        return of(null)
      })
    )*/

  }
  issueBook(BookId): Observable<any>{
    let librarycard = {
      'StudentId' : this.student.Id,
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
       this.router.navigateByUrl(`/student/details/${this.student.Id}`);
    })
  }
}

