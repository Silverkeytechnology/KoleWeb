import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AcademicProfileComponent } from './academic-profile/academic-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentProfileComponent, AcademicProfileComponent]
})
export class StudentProfileModule { }
