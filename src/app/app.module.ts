import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

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
