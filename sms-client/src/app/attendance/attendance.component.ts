import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import {MessageService } from '../message.service';
import { ClassroomService } from '../classroom.service';
import { Router,ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  CourseId;
  classroomStudent;
  todayDate;
  value = new Date();

  minDate = new Date(2000, 4, 10);

  maxDate = new Date();

  dateDisabled = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day === 0 || day === 6;
  }

  

  constructor(
    private attendanceService : AttendanceService,
    private messageService : MessageService,
    private activatedRoute : ActivatedRoute,
    private classroomService : ClassroomService
  ) {
    this.todayDate = new Date();        
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.CourseId = params.get('id');
      this.classroomStudents(this.todayDate);
    })
  }


  giveAttendance(){
      let data = {
        attendanceDate :formatDate(this.todayDate,'yyyy-MM-dd','en-us'),
        CourseId : this.CourseId,
        students : this.classroomStudent,    
  
      }
      console.log(data);

      this.attendanceService.giveStudentAttendance(this.CourseId,data)
      .subscribe(res => {
        this.messageService.showToast('Attendance given Successfully','success')
        this.classroomStudents(this.todayDate)

      })
  }

  classroomStudents(date){

    let formattedDate = formatDate(date,'yyyy-MM-dd','en-us');
    
    this.attendanceService.getStudentAttendance(this.CourseId, formattedDate)
    .subscribe(data =>{
      console.log(data);
      this.classroomStudent = data
    })
  }

}
