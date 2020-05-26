import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  teachers={
    "TeacherId":"",
    "TeacherName":"",
    "Degree":"",
    "TeachingExperiance":"",
    "CreatedDate":""
  };
  
  isEdit : Boolean = false;
  showTopToast : Boolean = false;
  required = true;
  hasError = false;
  error = "The Input Has error";
  disabled = false;

  constructor(private teachersService : TeachersService,
              private route : ActivatedRoute,
              private messageService : MessageService,
              private router : Router
              ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.teachers.TeacherId = id;
      if(id){
        this.isEdit = true;
        this.getTeacherDetail(id)
      }
    })
  }
  getTeacherDetail(id){
    this.teachersService.teacherDetail(id).subscribe(data=>{
      return this.teachers = data[0];
    })
  }
  
  Teachers(): void {
    if(this.isEdit){
      //make update call
      this.teachersService.updateTeacher(this.teachers.TeacherId,this.teachers)
        .subscribe(res => {
          this.messageService.showToast('Teacher Updated Successfully', 'success');
          this.router.navigateByUrl(`/teacher/details/${this.teachers.TeacherId}`);

        });
    }
    else {
      this.teachersService.addTeachers(this.teachers)
        .subscribe(res => {
          this.messageService.showToast('Teacher Added Successfully', 'success');
          console.log(res)
          this.router.navigateByUrl(`/teacher/details/${res.rows[1][0]["LAST_INSERT_ID()"]}`);

        });

    }

    
  }

}
