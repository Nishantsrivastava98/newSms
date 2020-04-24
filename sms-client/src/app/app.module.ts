import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {NglModule,NGL_ICON_CONFIG, NglIconConfig} from 'ng-lightning';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { StudentInsertComponent } from './student-insert/student-insert.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeroFormComponent,
    StudentInsertComponent,
    StudentDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NglModule
    
  ],
  providers: [
    { provide: NGL_ICON_CONFIG, useValue: <NglIconConfig>{ svgPath: '/assets/icons' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
