import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { SponsorshipProfileComponent } from '../sponsorship-profile/sponsorship-profile.component';
import { PaymentsProfileComponent } from '../payments-profile/payments-profile.component';
import { HealthProfileComponent } from '../health-profile/health-profile.component';
import { DisciplinaryProfileComponent } from '../disciplinary-profile/disciplinary-profile.component';
import { AcademicProfileComponent } from '../academic-profile/academic-profile.component';
import { StudentPersonalInfoComponent } from '../personal-info/student-personal-info.component';



const studentProfileRoutes: Routes = [

    { path: 'student-profile', component: StudentProfileComponent,
      children: [
        { path: '', redirectTo: '/student-profile/personal-info', pathMatch: 'full' },
        { path: 'personal-info',component: StudentPersonalInfoComponent },
        { path: 'academic',component: AcademicProfileComponent },
        { path: 'disciplinary',component: DisciplinaryProfileComponent },
        { path: 'health',component: HealthProfileComponent },
        { path: 'payments',component: PaymentsProfileComponent },
        { path: 'sponsorship',component: SponsorshipProfileComponent }
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
