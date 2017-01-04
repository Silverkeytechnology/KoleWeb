import { NgModule } from '@angular/core';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsCenterComponent } from './students-center/students-center.component';
import { StudentsRouterModule } from './students-router.module';



@NgModule({
  imports: [
    CommonModule,
    StudentsRouterModule
  ],
  declarations: [StudentsListComponent, StudentDetailComponent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent],
  exports: [StudentsListComponent, StudentDetailComponent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent]
})
export class StudentsModule { }
