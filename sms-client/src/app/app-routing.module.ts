import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/students',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path :'add',component:StudentInsertComponent},
  {path : 'details/:id',component:StudentDetailsComponent},
  {path :'update/:id',component:StudentInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
