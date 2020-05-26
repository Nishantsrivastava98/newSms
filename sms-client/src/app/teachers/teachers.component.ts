import { Component, OnInit } from '@angular/core';
import { TeachersService} from '../teachers.service';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';



@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  Teachers: any;
  data: any;
  opened: boolean=false;

  constructor(private teachersService : TeachersService) { }

  ngOnInit(): void {
    this.getTeachers();
  

  }
  /** GET Teachers from the server */
  getTeachers() {
    this.teachersService.getTeachers()
      .subscribe(dataFromServer => {
        this.Teachers = dataFromServer;
        this.data = dataFromServer;
      });
  }
  deleteTeachers(row): void {
    this.teachersService.deleteTeachers(row.TeacherId).subscribe(()=>{
      let index = this.Teachers.findIndex(function(item){
        
          return item.TeacherId == row.TeacherId;

      });
      console.log(index);
      this.Teachers.splice(index,1)
     

    });
  }
  sort: INglDatatableSort = { key: 'Id', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.data.sort((a: any, b: any) => {
      var s,t;
      if (key === 'Id' || key === 'RollNo' ) {
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
    this.data = this.data ? null : this.Teachers;
  }

  onRowClick($event: INglDatatableRowClick) {
    console.log('clicked row', $event.data);
  }
  openPrompt(){
    this.opened = !this.opened
  }
  cancel() {
    this.opened = false;
  }
  
}
