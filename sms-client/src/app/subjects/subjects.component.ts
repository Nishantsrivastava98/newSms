import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects;
  subjects1={
    "SubjectId":"",
    "SubjectName":""
  };
  isAdded = false;
  subjectsOld = new Map(this.subjects);
  constructor(private subjectService : SubjectsService,
              private router : Router,
              private messageService : MessageService) { }

  ngOnInit(): void {
    this.getSubjects()
  }
  getSubjects(){
    this.subjectService.getSubjects()
      .subscribe(dataFromServer => {
        console.log(dataFromServer);
        this.subjects = dataFromServer
      });
    
  }
  updateSubjects(row){
    let SubjectName ={
      
      "SubjectName":row.SubjectName
    }
    
    this.subjectService.updateSubjects(row.SubjectId,SubjectName)
      .subscribe(res =>{
        this.messageService.showToast('Subject Updated Successfully', 'success');
        row.isEditable = false;
      });
    
  }
  deleteSubjects(id){
    
    this.subjectService.deleteSubjects(id).subscribe(res =>{
      let index = this.subjects.findIndex(function(item){
        return item.Id == id;
    });
    this.subjects.splice(index,1)
      this.messageService.showToast('Subject deleted Successfully', 'error');
    })
  }
  addSubjects(){
    this.subjectService.addSubjects(this.subjects1).subscribe(res => {
      this.messageService.showToast('Student Added Successfully', 'success');
      this.router.navigateByUrl(`/subjects`);
      
    })
  }
  onEdit(id,subjectName){
    this.subjectsOld.set(id,subjectName)
    console.log(this.subjectsOld)
  }
  onCancel(row){
    row.SubjectName = this.subjectsOld.get(row.SubjectId);

  }
  

}
