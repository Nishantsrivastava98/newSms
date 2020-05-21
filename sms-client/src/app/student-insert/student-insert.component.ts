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
    "CourseName":"",
    "CourseId": "",
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
          this.router.navigateByUrl(`/student/details/${this.student.Id}`);
          console.log('Response recieved: ', res);
          console.log(this.student.Id)
        });
    }
    else {
      this.studentService.addStudents(this.student)
        .subscribe(res => {
          this.messageService.showToast('Student Added Successfully', 'success');
          this.router.navigateByUrl(`/student/details/${res.rows[1][0]["LAST_INSERT_ID()"]}`);

        });

    
    }

    
  }
  optionsCourseName = [

          {"label":'ECE', "value":'1'},

          {"label":'ME', "value":'2'},

          {"label":'CSE', "value":'3'},

          {"label":'EE', "value":'4'},

          {"label":'CE', "value":'5'},

          {"label":'IT', "value":'6'}
  ];
  selectionCourse: string = null;

  openCourse = false;
  optionsYear = [

    {"label":'First Year', "value":'1'},

    {"label":'Second Year', "value":'2'},

    {"label":'Third Year', "value":'3'},

    {"label":'Final Year', "value":'4'}
];
selectionYear: string = null;

openYear = false;
optionsSemester = [

  {"label":'First Semester', "value":'1'},

  {"label":'Second Semester', "value":'2'},

  {"label":'Third Semester', "value":'3'},

  {"label":'Fourth Semester', "value":'4'},

  {"label":'Fifth Semester', "value":'5'},

  {"label":'Sxth Semester', "value":'6'},

  {"label":'Seventh Semester', "value":'7'},

  {"label":'Last Semester', "value":'8'},
];
selectionSemester: string = null;

openSemester = false;

  
}
