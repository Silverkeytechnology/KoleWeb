import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';
import { CoursesModule } from './courses/courses.module';
import { InstructorsModule } from './instructors/instructors.module';
import { SchoolsModule } from './schools/schools.module';
import { appRouter } from './app.router'


@NgModule({
  declarations: [AppComponent],
  imports: [
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    appRouter,
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    StudentsModule,
    ClassesModule,
    CoursesModule,
    InstructorsModule,
    SchoolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
