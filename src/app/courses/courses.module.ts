import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesDashboardComponent, CoursesListComponent, CourseDetailComponent, CourseFormComponent],
  exports: [CoursesDashboardComponent, CoursesListComponent, CourseDetailComponent, CourseFormComponent]
})
export class CoursesModule { }
