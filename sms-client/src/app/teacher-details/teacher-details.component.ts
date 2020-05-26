import { Component, OnInit } from '@angular/core';
import {TeachersService } from '../teachers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {
  teacher;

  constructor(private teachersService : TeachersService,
              private activatedRoute : ActivatedRoute) { }

              ngOnInit(): void {
                this.activatedRoute.paramMap.subscribe(params => {
                  let TeacherId = params.get('id');
                  
                  this.teacherDetail(TeacherId);
                  
                });
              }
  teacherDetail(id): void {
    this.teachersService.teacherDetail(id)
    .subscribe(dataFromServer => this.teacher = dataFromServer[0]);
  }
  

}
