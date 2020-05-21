import { Component, OnInit } from '@angular/core';
import {StudentService } from '../student.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  Students;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    
      this.studentService.getStudents()
        .subscribe(dataFromServer => {
          this.Students = dataFromServer;
        });
    }

    getStudents(){
      this.studentService.getStudents();
    }
}
