import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service'
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  classroom;
  classroomStudent;
  classroomList(): void {
    this.classroomService.classroomList()
    .subscribe(dataFromServer => {
      console.log(dataFromServer);
      return this.classroom = dataFromServer;
    });
  }

  constructor(private classroomService  : ClassroomService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.classroomList()
    
   
  }

}
