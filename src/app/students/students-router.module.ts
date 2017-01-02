import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from './students-dashboardstudents-dashboard.component.ts';
import { StudentsListComponent } from './students-liststudents-list.component.ts';
import { StudentDetailComponent } from './student-detail/student-detail.component.ts';
import { StudentsHomeComponent } from './students-home/students-home.component.ts';

const studentsRoutes: Routes = [
  {
    path: 'students-dashboard',
    component: StudentsDashboardComponent,
    children: [
      {
        path: '',
        component: StudentsListComponent,
        children: [
          {
            path: ':id',
            component: StudentDetailComponent
          },
          {
            path: '',
            component: StudentsHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule([
  imports: [
    RouterModule.forChild(studentsRoutes);
  ],
  exports: [
    RouterModule
  ]
])

export class StudentsRouterModule { }
