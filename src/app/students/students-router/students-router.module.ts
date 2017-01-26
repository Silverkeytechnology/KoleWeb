
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

import { StudentProfileComponent } from '../student/student-profile/student-profile.component';
import { StudentSponsorshipComponent } from '../student/student-sponsorship/student-sponsorship.component';
import { StudentPaymentsComponent } from '../student/student-payments/student-payments.component';
import { StudentHealthComponent } from '../student/student-health/student-health.component';
import { StudentDisciplinaryComponent } from '../student/student-disciplinary/student-disciplinary.component';
import { StudentPerformanceComponent } from '../student/student-performance/student-performance.component';
import { StudentPersonalInfoComponent } from '../student/student-personal-info/student-personal-info.component';
import { StudentAttendanceComponent } from '../student/student-attendance/student-attendance.component';


const studentsRoutes: Routes = [
        { path: 'students-center', component: StudentsCenterComponent,
          children:
          [
            { path: '', redirectTo: '/students-center/(menucontent:students-dashboard)', pathMatch: 'full'},
            { path: 'students-dashboard',component: StudentsDashboardComponent, outlet: 'menucontent' },
            { path: 'students-attendance',component: StudentsAttendanceComponent, outlet: 'menucontent' },
            { path: 'students-performance',component: StudentsPerformanceComponent, outlet: 'menucontent' },
            { path: 'students-transfer',component: StudentsTransferComponent, outlet: 'menucontent' },
            { path: 'students-disciplinary',component: StudentsDisciplinaryComponent, outlet: 'menucontent' },
            { path: 'students-payments',component: StudentsPaymentsComponent, outlet: 'menucontent' },
            { path: 'students-sponsorship',component: StudentsSponsorshipComponent, outlet: 'menucontent' },
            { path: 'students-enrollment',component: StudentsEnrollmentComponent, outlet:'menucontent'},
            { path: 'students-list',component: StudentsListComponent, outlet: 'menucontent' },
            { path: 'students-list/:id',component: StudentProfileComponent, outlet: 'profile',
              children: [
                { path: 'personal-info',component: StudentPersonalInfoComponent, outlet: 'info' },
                { path: 'performance',component: StudentPerformanceComponent, outlet: 'performance' },
                { path: 'disciplinary',component: StudentDisciplinaryComponent, outlet: 'disciplinary' },
                { path: 'health',component: StudentHealthComponent, outlet: 'health' },
                { path: 'payments',component: StudentPaymentsComponent, outlet: 'payments' },
                { path: 'sponsorship',component: StudentSponsorshipComponent, outlet: 'sponsorship' },
                { path: 'attendance',component: StudentAttendanceComponent, outlet: 'attendance' }
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
