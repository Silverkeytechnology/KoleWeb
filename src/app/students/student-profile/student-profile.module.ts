import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AcademicProfileComponent } from './academic-profile/academic-profile.component';
import { DisciplinaryProfileComponent } from './disciplinary-profile/disciplinary-profile.component';
import { HealthProfileComponent } from './health-profile/health-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentProfileComponent, AcademicProfileComponent, DisciplinaryProfileComponent, HealthProfileComponent]
})
export class StudentProfileModule { }
