import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { StudentSponsorshipProfileComponent } from '/../../sponsorship-profile/student-sponsorship-profile.component';
import { StudentPaymentsProfileComponent } from '/../../payments-profile/student-payments-profile.component';
import { StudentHealthProfileComponent } from '/../../health-profile/student-health-profile.component';
import { StudentDisciplinaryProfileComponent } from '/../../disciplinary-profile/student-disciplinary-profile.component';
import { StudentAcademicProfileComponent } from '/../../academic-profile/student-academic-profile.component';
import { StudentPersonalInfoPComponent } from '/../../personal-info/personal-info.component';



const studentProfileRoutes: Routes = [

    { path: 'student-profile', component: StudentProfileComponent,
      children: [
        { path: '', redirectTo: '/student-profile/personal-info', pathMatch: 'full' },
        { path: 'personal-info',component: StudentPersonalInfoPComponent },
        { path: 'academic',component: StudentAcademicProfileComponent },
        { path: 'disciplinary',component: StudentDisciplinaryProfileComponent },
        { path: 'health',component: StudentHealthProfileComponent },
        { path: 'payments',component: StudentPaymentsProfileComponent },
        { path: 'sponsorship',component: StudentSponsorshipProfileComponent }
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
  ]
  declarations: []
})
export class StudentProfileRouterModule { }
