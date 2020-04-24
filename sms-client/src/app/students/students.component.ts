import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  Students;
  data = [];

  constructor(private studentService: StudentService) { }




  // getStudents1 (id:number): Observable<any> {
  //   const url = `${this.StudentsUrl}/${id}`;
  //   return this.http.get(url)
  // }


  ngOnInit(): void {
    this.getStudents();
  

  }
  /** GET Students from the server */
  getStudents() {
    this.studentService.getStudents()
      .subscribe(dataFromServer => {
        this.Students = dataFromServer;
        this.data = dataFromServer;
      });
  }
  deleteStudents(id): void {
    this.studentService.deleteStudents(id).subscribe(()=>{
      let index = this.Students.findIndex(function(item){
          return item.Id == id;
      });
      this.Students.splice(index,1)

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
     this.data = this.data ? null : this.Students;
   }
 
   onRowClick($event: INglDatatableRowClick) {
     console.log('clicked row', $event.data);
   }
 }
