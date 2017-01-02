import { RouterModule, Routes } from '@angular/router';

import { StudentsDashboardComponent } from './students-dashboardstudents-dashboard.component.ts';
import { StudentsListComponent } from './students-liststudents-list.component.ts';
import { StudentDetailComponent } from './student-detail/student-detail.component.ts';
imports { StudentsHomeComponent } from './students-home/students-home.component.ts';
const studentsDashboardRoutes: Routes = [
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
]
