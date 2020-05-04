import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LibraryAdministrationComponent } from './library-administration/library-administration.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookInsertComponent } from './book-insert/book-insert.component';


const routes: Routes = [
  {path:'',redirectTo:'/students',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path :'student/add',component:StudentInsertComponent},
  {path : 'student/details/:id',component:StudentDetailsComponent},
  {path :'student/update/:id',component:StudentInsertComponent},
  {path : 'library',component:LibraryAdministrationComponent},
  {path : 'library/details/:id',component:BookDetailsComponent},
  {path :'library/update/:id',component:BookInsertComponent},
  {path :'library/add',component:BookInsertComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
