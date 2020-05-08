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
  attendance={
    "CourseId":'',
    "StudentId":'',
    "Attendance":'',
    "Date":''
    
  };

  classroomStudent;
  
  giveAttendance(){
    
    this.activatedRoute.paramMap.subscribe(params =>{
      let CourseId = params.get('id');
      let data = {
        attendanceDate :formatDate(new Date(),'yyyy-MM-dd','en-us'),
        students : this.classroomStudent,
  
      }
      this.attendanceService.giveStudentAttendance(CourseId,data)
                          .subscribe(res => {
                            this.messageService.showToast('Attendance given Successfully','success')

                          })
                          console.log(data);
      
    })

    console.log(this.classroomStudent)
  }

  classroomStudents(id,date){
    this.attendanceService.getStudentAttendance(id,date).pipe(
      map(res => res.map(item => {
        item.Attendance = false;
        return item;
      }))
    )
    .subscribe(data =>{
      console.log(data);
      this.classroomStudent = data
    })
  }

  constructor(private attendanceService : AttendanceService,
              private messageService : MessageService,
              private activatedRoute : ActivatedRoute,
              private classroomService : ClassroomService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let CourseId = params.get('id');
      let date = formatDate(new Date(),'yyyy-MM-dd','en-us')
      this.classroomStudents(CourseId,date);
    
    })

  }
  


}
