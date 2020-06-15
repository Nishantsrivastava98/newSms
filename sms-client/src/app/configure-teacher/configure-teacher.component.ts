import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeacherconfigurationService } from '../teacherconfiguration.service';
import { MessageService } from '../message.service';
import { FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, switchMap, tap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-configure-teacher',
  templateUrl: './configure-teacher.component.html',
  styleUrls: ['./configure-teacher.component.scss']
})
export class ConfigureTeacherComponent implements OnInit {
  @Input() isOpen :boolean;
  @Input() teacherconfiguration;
  @Output() isOpenChange = new EventEmitter<Boolean>()

  LoadingTeacher = false;
  LoadingSubject = false;
  selectedSubject;
  TeacherId;
  SubjectId;
  selectedTeacher;
  inputctrlTeacher = new FormControl()
  inputctrlSubject = new FormControl()

  open: boolean;
  openSubject : boolean;

  constructor(private teacherconfigurationService : TeacherconfigurationService,
              private messageService : MessageService) {
    this.selectedTeacher = this.inputctrlTeacher.valueChanges.pipe(

      tap(() => this.LoadingTeacher = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term === '') {
          this.open = false;
          return of([]);
        }
        else{
          return this.teacherconfigurationService.searchTeacher(term).pipe(
            map((response:any[]) => response.map((item) => {

              return {value: item.TeacherId, label: item.TeacherName  }
            }))
          );
        }
      }),
      tap(() => this.LoadingTeacher = false),

    );


    this.selectedSubject = this.inputctrlSubject.valueChanges.pipe(

      tap(() => this.LoadingSubject = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(termSubject => {
        if (termSubject === '') {
          this.openSubject = false;
          return of([]);
        }
        else{
          return this.teacherconfigurationService.searchSubject(termSubject).pipe(
            map((response:any[]) => response.map((item) => {

              return {value: item.SubjectId, label: item.SubjectName  }
            }))
          );
        }
      }),
      tap(() => this.LoadingSubject = false),

    );
    
   }

  ngOnInit(): void {
  }
  openChangeTeacher(isOpen: boolean) {
    if (isOpen && !this.inputctrlTeacher.value) {
      return;
    }
    this.open = isOpen;
  }
  openChangeSubject(isOpenSubject: boolean) {
    if (isOpenSubject && !this.inputctrlSubject.value) {
      return;
    }
    this.openSubject = isOpenSubject;
  }
  allot(){
    let teacherConfiguration = {
      "TeacherId" : this.TeacherId,
      "SubjectId" : this.SubjectId
    }
    let  count =0;
    let countNumberOfTeachers=0;
    console.log(this.teacherconfiguration[0].TeacherId);
    for (let i = 0; i <= this.teacherconfiguration.length-1; i++) {
      if ((this.teacherconfiguration[i].TeacherId == teacherConfiguration.TeacherId) && (this.teacherconfiguration[i].SubjectId == teacherConfiguration.SubjectId)) {
          count += 1
      } 
      if(this.teacherconfiguration[i].TeacherId == teacherConfiguration.TeacherId){
        countNumberOfTeachers+=1;
      }
    }
    console.log(countNumberOfTeachers)
    if(count==0 && countNumberOfTeachers < 3){
      this.teacherconfigurationService.addTeacherconfiguration(teacherConfiguration).subscribe(data =>{
        this.isOpenChange.emit(false)
          this.messageService.showToast('Teacher alloted succesfully !','success');
      })
    }
    
    else{
       if(countNumberOfTeachers >= 3){
        this.messageService.showToast('Teacher already alloted maximum subject !','error');
      }
      else{
      this.messageService.showToast('Teacher alloted already for this subject !','error');
      }
    }
  }

}
