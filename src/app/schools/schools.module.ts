import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsDashboardComponent } from './schools-dashboard/schools-dashboard.component';
import { SchoolsListComponent } from './schools-list/schools-list.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolFormComponent } from './school-form/school-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SchoolsDashboardComponent, SchoolsListComponent, SchoolDetailComponent, SchoolFormComponent]
})
export class SchoolsModule { }
