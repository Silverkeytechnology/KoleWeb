import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AcademicProfileComponent } from './academic-profile/academic-profile.component';
import { DisciplinaryProfileComponent } from './disciplinary-profile/disciplinary-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentProfileComponent, AcademicProfileComponent, DisciplinaryProfileComponent]
})
export class StudentProfileModule { }
