
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsDashboardComponent } from '../students-dashboard/students-dashboard.component';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentsCenterComponent } from '../students-center/students-center.component';

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
        { path: 'students-enrollment',component: StudentsEnrollmentComponent},
        { path: 'students-list',component: StudentsListComponent }
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
