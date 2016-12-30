import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentsListComponent, StudentDetailComponent, StudentFormComponent, StudentsComponent]
})
export class StudentsModule { }
