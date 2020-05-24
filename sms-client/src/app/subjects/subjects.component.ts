import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects;
  subjectsOld = new Map();
  constructor(private subjectService : SubjectsService,
              private activatedRoute : ActivatedRoute,
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
  updateSubjects(id){
    
    this.subjectService.updateSubjects(id,this.subjects)
      .subscribe(res =>{
        this.messageService.showToast('Subject Updated Successfully', 'success');
      });
    
  }
  deleteSubjects(id){
    
    this.subjectService.deleteSubjects(id).subscribe(res =>{
      this.messageService.showToast('Student deleted Successfully', 'error');
    })
  }
  addSubjects(){
    this.subjectService.getSubjects().subscribe(dataFromServer => {
      this.messageService.showToast('Student Added Successfully', 'success');
      this.subjects = dataFromServer;
    })
  }

}
