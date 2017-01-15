import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { StudentSponsorshipComponent } from '../student-sponsorship/student-sponsorship.component';
import { StudentPaymentsComponent } from '../student-payments/student-payments.component';
import { StudentHealthComponent } from '../student-health/student-health.component';
import { StudentDisciplinaryComponent } from '../student-disciplinary/student-disciplinary.component';
import { StudentPerformanceComponent } from '../student-performance/student-performance.component';
import { StudentPersonalInfoComponent } from '../personal-info/student-personal-info.component';
import { StudentAttendanceComponent } from '../student-attendance/student-attendance.component';



const studentProfileRoutes: Routes = [

    { path: 'student-profile', component: StudentProfileComponent,
      children: [
        { path: ':id', component: StudentPersonalInfoComponent,
        children: [
          { path: 'personal-info',component: StudentPersonalInfoComponent },
          { path: 'performance',component: StudentPerformanceComponent },
          { path: 'disciplinary',component: StudentDisciplinaryComponent },
          { path: 'health',component: StudentHealthComponent },
          { path: 'payments',component: StudentPaymentsComponent },
          { path: 'sponsorship',component: StudentSponsorshipComponent },
          { path: 'attendance',component: StudentAttendanceComponent }
        ]
      }
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
