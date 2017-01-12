import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { StudentSponsorshipProfileComponent } from '../student-sponsorship-profile/student-sponsorship-profile.component';
import { StudentPaymentsProfileComponent } from '../student-payments-profile/student-payments-profile.component';
import { StudentHealthProfileComponent } from '../student-health-profile/student-health-profile.component';
import { StudentDisciplinaryProfileComponent } from '../student-disciplinary-profile/student-disciplinary-profile.component';
import { StudentAcademicProfileComponent } from '../student-academic-profile/student-academic-profile.component';

const studentsRoutes: Routes = [

    { path: 'student-profile', component: StudentProfileComponent,
      children: [
        { path: 'academic',component: StudentAcademicProfileComponent },
        { path: 'students-attendance',component: StudentsAttendanceComponent },
        { path: 'students-performance',component: StudentsPerformanceComponent },
        { path: 'students-transfer',component: StudentsTransferComponent },
        { path: 'students-disciplinary',component: StudentsDisciplinaryComponent },
        { path: 'students-payments',component: StudentsPaymentsComponent },
        { path: 'students-sponsorship',component: StudentsSponsorshipComponent },
        { path: 'students-enrollment',component: StudentsEnrollmentComponent,
          children: [
            { path: 'new', component: StudentFormComponent }
  //          { path: ':id', component: StudentDetailComponent }
          ]
        },
        { path: 'students-list',component: StudentsListComponent,
         children: [
            { path: ':id', component: StudentDetailModalComponent }
          ]

        }
      ]
  }
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StudentProfileRouterModule { }
