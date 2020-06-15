import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student;
  id;
  constructor(
    private studentService : StudentService,
    private route : ActivatedRoute,
    
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let studentId = params.get('id');
      this.id = studentId;
      console.log('studentId: ', studentId);
      this.studentDetails(studentId);
      
    });   
  }


   studentDetails(id): void {
    this.studentService.studentDetails(id)
    .subscribe(dataFromServer => this.student = dataFromServer);
  }
}

