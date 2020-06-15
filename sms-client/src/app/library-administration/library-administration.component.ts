import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { INglDatatableRowClick, INglDatatableSort } from 'ng-lightning';
@Component({
  selector: 'app-library-administration',
  templateUrl: './library-administration.component.html',
  styleUrls: ['./library-administration.component.scss']
})
export class LibraryAdministrationComponent implements OnInit {
  data = [];
  constructor(private libraryService : LibraryService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.libraryService.getBooks()
                         .subscribe(booksFromServer => {
                           console.log(booksFromServer)
                           return this.data = booksFromServer});
  }
  
  deleteBooks(id):void {
    this.libraryService.deleteBooks(id).subscribe(()=>{
      let index = this.data.findIndex(function(item){
          return item.BooksId == id;
      });
      this.data.splice(index,1)

    });

  }
  

   // Initial sort
   sort: INglDatatableSort = { key: 'Id', order: 'asc' };

   // Show loading overlay
   loading = false;
 
   // Toggle name column
   hideName = false;
 
   // Custom sort function
   onSort($event: INglDatatableSort) {
     const { key, order } = $event;
     this.data.sort((a: any, b: any) => {
       var s,t;
       if (key === 'Id' || key === 'RollNo' ) {
        t = b[key] - a[key];
       }
       else if(key === 'DateOfAdmission'){
         
         var d1 = new Date(a[key]);
         var d2 = new Date(b[key]);
        t = d2.getTime() - d1.getTime();

       }
       else{
        t = b[key].localeCompare(a[key]);
       }

    return t * (order === 'desc'? 1 :-1)
 });
   }
 
   toggleData() {
     this.data = this.data ? null : this.data;
   }
 
   onRowClick($event: INglDatatableRowClick) {
     console.log('clicked row', $event.data);

   }
}
