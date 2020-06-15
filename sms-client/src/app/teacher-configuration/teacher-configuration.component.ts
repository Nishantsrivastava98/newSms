import { Component, OnInit } from '@angular/core';
import { TeacherconfigurationService } from '../teacherconfiguration.service';
import { ActivatedRoute,Router } from '@angular/router';
import { MessageService } from "../message.service";
import { INglDatatableRowClick, INglDatatableSort } from 'ng-lightning';


@Component({
  selector: 'app-teacher-configuration',
  templateUrl: './teacher-configuration.component.html',
  styleUrls: ['./teacher-configuration.component.scss']
})
export class TeacherConfigurationComponent implements OnInit {
  teacherconfiguration: any;
  isOpen = false;
  

  constructor(private teacherconfigurationService : TeacherconfigurationService,
              private router : Router,
              private messageService  :MessageService) { }

  ngOnInit(): void {
    this.getTeacherconfig();
  }
  getTeacherconfig(){
    this.teacherconfigurationService.getTeacherconfiguration().subscribe(teacherconfiguration=>{
      return this.teacherconfiguration = teacherconfiguration;
    })
  }
  updateTeacheronfig(id){
    this.teacherconfigurationService.updateTeacherconfiguration(id,this.teacherconfigurationService).subscribe(teacherconfiguration=>{
      this.messageService.showToast('Teacher Configuration updated','success');

    })
  }
  deleteTeacherConfig(id){
    
    this.teacherconfigurationService.deleteTeacherconfiguration(id).subscribe(res =>{
      let index = this.teacherconfiguration.findIndex(function(item){
        return item.ConfigurationId == id;
    });
    this.teacherconfiguration.splice(index,1)
      this.messageService.showToast('Configuration deleted Successfully', 'error');
    })
  }
  addTeacherConfig(){
    this.teacherconfigurationService.addTeacherconfiguration(this.teacherconfiguration).subscribe(res => {
      this.messageService.showToast('Teacher configuration completed Sucessfully', 'success');
      
      
    })
  }
  sort: INglDatatableSort = { key: 'Id', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.teacherconfiguration.sort((a: any, b: any) => {
      var s,t;
      if (key === 'ConfigurationId' || key === 'TeacherId' || key === 'SubjectId' ) {
       t = b[key] - a[key];
      }
      else if(key === 'DateOfAdmission'){
        
        var d1 = new Date(a[key]);
        var d2 = new Date(b[key]);
       t = d2.getTime() - d1.getTime();

      }
      else{
       t = b[key].localeCompare(a[key]);
      }

   return t * (order === 'desc'? 1 :-1)
});
  }

  toggleData() {
    this.teacherconfiguration = this.teacherconfiguration ? null : this.teacherconfiguration;
  }

  onRowClick($event: INglDatatableRowClick) {
    console.log('clicked row', $event.data);
  }
}
