import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.scss']
})
export class StudentInsertComponent implements OnInit {
  showTopToast = false;
  minDate = new Date(1950, 4, 10);

  maxDate = new Date();
  doa;
  

  dateDisabled = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day === 0 || day === 6;
  }


  isEdit : Boolean = false;
 
  student = {
    "Id": '',
    "Name": "",
    "Department": "",
    "RollNo": null,
    "Year": null,
    "Semester": null,
    "DateOfAdmission": null
  }

  constructor(private studentService: StudentService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.isEdit = true;
        this.getDetails(id);
      }
    })
  }

  getDetails(id){
    this.studentService.studentDetails(id).subscribe(data => {
      this.student = data;
      this.doa = this.student.DateOfAdmission && new Date(this.student.DateOfAdmission);
    });
  }
  
  Students(): void {
    this.student.DateOfAdmission = this.doa && formatDate(this.doa, 'yyyy-MM-dd', 'en-US');
    if(this.isEdit){
      //make update call
      this.studentService.updateStudents(this.student.Id,this.student)
        .subscribe(res => {
          this.messageService.showToast('Student Updated Successfully', 'success');
          this.router.navigateByUrl(`/library/details/${this.student.Id}`);
          console.log('Response recieved: ', res);
          console.log(this.student.Id)
        });
    }
    else {
      this.studentService.addStudents(this.student)
        .subscribe(res => {
          this.messageService.showToast('Student Added Successfully', 'success');
          this.router.navigateByUrl(`/library/details/${res.rows[1][0]["LAST_INSERT_ID()"]}`);

        });

    
    }

    
  }
}
