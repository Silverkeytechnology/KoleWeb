import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsDashboardComponent } from './departments-dashboard/departments-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DepartmentsListComponent, DepartmentsDashboardComponent]
})
export class DepartmentsModule { }
