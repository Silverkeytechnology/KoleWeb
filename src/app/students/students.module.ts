import { NgModule } from '@angular/core';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { appRouter} from '../app.router';
import { StudentsHomeComponent } from './students-home/students-home.component';

@NgModule({
  imports: [
    CommonModule,
    appRouter
  ],
  declarations: [StudentsListComponent, StudentDetailComponent, StudentFormComponent,StudentsDashboardComponent, StudentsHomeComponent],
  exports: [StudentsListComponent,StudentDetailComponent,StudentFormComponent,StudentFormComponent]
})
export class StudentsModule { }
