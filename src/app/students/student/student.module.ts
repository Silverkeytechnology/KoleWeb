import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileRouterModule } from './student-router/student-router.module';

import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StudentDisciplinaryComponent } from './student-disciplinary/student-disciplinary.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentHealthComponent } from './student-health/student-health.component';
import { StudentPaymentsComponent } from './student-payments/student-payments.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { StudentPersonalInfoComponent } from './student-personal-info/student-personal-info.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentSponsorshipComponent } from './student-sponsorship/student-sponsorship.component';

@NgModule({
  imports: [
    CommonModule,
    StudentProfileRouterModule
  ],
  declarations: [StudentAttendanceComponent, StudentDisciplinaryComponent, StudentFormComponent, StudentHealthComponent, StudentPaymentsComponent, StudentPerformanceComponent, StudentPersonalInfoComponent, StudentProfileComponent, StudentSponsorshipComponent],
  exports: [StudentAttendanceComponent, StudentDisciplinaryComponent, StudentFormComponent, StudentHealthComponent, StudentPaymentsComponent, StudentPerformanceComponent, StudentPersonalInfoComponent, StudentProfileComponent, StudentSponsorshipComponent]
})
export class StudentModule { }
