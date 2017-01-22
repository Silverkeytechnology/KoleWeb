
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
        { path: 'students-dashboard',component: StudentsDashboardComponent, outlet: 'menucontent' },
        { path: 'students-attendance',component: StudentsAttendanceComponent, outlet: 'menucontent' },
        { path: 'students-performance',component: StudentsPerformanceComponent, outlet: 'menucontent' },
        { path: 'students-transfer',component: StudentsTransferComponent, outlet: 'menucontent' },
        { path: 'students-disciplinary',component: StudentsDisciplinaryComponent, outlet: 'menucontent' },
        { path: 'students-payments',component: StudentsPaymentsComponent, outlet: 'menucontent' },
        { path: 'students-sponsorship',component: StudentsSponsorshipComponent, outlet: 'menucontent' },
        { path: 'students-enrollment',component: StudentsEnrollmentComponent, outlet:'menucontent'},
        { path: 'students-list',component: StudentsListComponent, outlet: 'menucontent' }
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
