import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminDashboardComponent, ManageStudentsComponent]
})
export class AdminModule { }
