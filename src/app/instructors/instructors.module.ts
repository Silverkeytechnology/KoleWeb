import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsDashboardComponent } from './instructors-dashboard/instructors-dashboard.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstructorsDashboardComponent, InstructorsListComponent, InstructorDetailComponent, InstructorFormComponent],
  exports: [InstructorsDashboardComponent, InstructorsListComponent, InstructorDetailComponent, InstructorFormComponent]
})
export class InstructorsModule { }
