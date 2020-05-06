import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom-students',
  templateUrl: './classroom-students.component.html',
  styleUrls: ['./classroom-students.component.scss']
})
export class ClassroomStudentsComponent implements OnInit {
  classroomStudent;
  
  classroomStudents(id){
    this.classroomService.getStudents(id)
                          .subscribe(data =>{
                            console.log(data);
                            return this.classroomStudent = data
                          })
  }

  constructor(private classroomService  : ClassroomService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      let CourseId = params.get('id');
      this.classroomStudents(CourseId);
    })
}
}