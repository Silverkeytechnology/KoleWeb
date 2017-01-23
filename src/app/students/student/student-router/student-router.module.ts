import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { StudentSponsorshipComponent } from '../student-sponsorship/student-sponsorship.component';
import { StudentPaymentsComponent } from '../student-payments/student-payments.component';
import { StudentHealthComponent } from '../student-health/student-health.component';
import { StudentDisciplinaryComponent } from '../student-disciplinary/student-disciplinary.component';
import { StudentPerformanceComponent } from '../student-performance/student-performance.component';
import { StudentPersonalInfoComponent } from '../student-personal-info/student-personal-info.component';
import { StudentAttendanceComponent } from '../student-attendance/student-attendance.component';



const studentProfileRoutes: Routes = [

    { path: 'student-profile', component: StudentProfileComponent,outlet: 'menucontent',
      children: [
          //{ path: '', redirectTo: '/student-profile/(menucontent:)(info:personal-info)', pathMatch: 'full'},
          { path: ':id',component: StudentPersonalInfoComponent, outlet: 'info' },
          { path: 'performance',component: StudentPerformanceComponent, outlet: 'performance' },
          { path: 'disciplinary',component: StudentDisciplinaryComponent, outlet: 'disciplinary' },
          { path: 'health',component: StudentHealthComponent, outlet: 'health' },
          { path: 'payments',component: StudentPaymentsComponent, outlet: 'payments' },
          { path: 'sponsorship',component: StudentSponsorshipComponent, outlet: 'sponsorship' },
          { path: 'attendance',component: StudentAttendanceComponent, outlet: 'attendance' }
        ]
      }
];


@NgModule({
  imports: [
    RouterModule.forChild(studentProfileRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StudentProfileRouterModule { }
