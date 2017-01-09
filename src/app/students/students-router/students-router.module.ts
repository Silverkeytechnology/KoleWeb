
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from '../students-dashboard/students-dashboard.component';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentsCenterComponent } from '../students-center/students-center.component';
import { StudentFormComponent } from '../student-form/student-form.component';

import { StudentsEnrollmentComponent } from '../students-enrollment/students-enrollment.component';
import { StudentsAttendanceComponent } from '../students-attendance/students-attendance.component';
import { StudentsPerformanceComponent } from '../students-performance/students-performance.component';
import { StudentsTransferComponent } from '../students-transfer/students-transfer.component';
import { StudentsDisciplinaryComponent } from '../students-disciplinary/students-disciplinary.component';
import { StudentsPaymentsComponent } from '../students-payments/students-payments.component';
import { StudentsSponsorshipComponent } from '../students-sponsorship/students-sponsorship.component';

const studentsRoutes: Routes = [

    { path: 'students-center', component: StudentsCenterComponent,
      children: [
        { path: '', redirectTo: '/students-center/students-dashboard', pathMatch: 'full' },
        { path: 'students-dashboard',component: StudentsDashboardComponent },
        { path: 'students-attendance',component: StudentsAttendanceComponent },
        { path: 'students-performance',component: StudentsPerformanceComponent },
        { path: 'students-transfer',component: StudentsTransferComponent },
        { path: 'students-disciplinary',component: StudentsDisciplinaryComponent },
        { path: 'students-payments',component: StudentsPaymentsComponent },
        { path: 'students-sponsorship',component: StudentsSponsorshipComponent },
        { path: 'students-enrollment',component: StudentsEnrollmentComponent,
          children: [
            { path: 'new', component: StudentFormComponent },
            { path: ':id', component: StudentDetailComponent }
          ]
        },
        { path: 'students-list',component: StudentsListComponent,
          children: [
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
