import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from '../students-dashboard/students-dashboard.component';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentsCenterComponent } from '../students-center/students-center.component';
import { StudentFormComponent } from '../student-form/student-form.component';

const studentsRoutes: Routes = [

    { path: 'students-center', component: StudentsCenterComponent,
      children: [
        { path: '', redirectTo: '/students-center/students-dashboard', pathMatch: 'full' },
        { path: 'students-dashboard',component: StudentsDashboardComponent },
        { path: 'students-list',component: StudentsListComponent,
          children: [
            { path: 'new', component: StudentFormComponent },
            { path: ':id', component: StudentDetailComponent }
          ]
        }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class StudentsRouterModule { }
