import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { ClassesDashboardComponent } from './classes-dashboard/classes-dashboard.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassFormComponent } from './class-form/class-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClassesComponent, ClassesDashboardComponent, ClassesListComponent, ClassDetailComponent, ClassFormComponent]
})
export class ClassesModule { }
