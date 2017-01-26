import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgLocalization } from '@angular/common';

import { StudentsRouterModule } from './students-router/students-router.module';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsCenterComponent } from './students-center/students-center.component';

import { StudentsEnrollmentComponent } from './students-enrollment/students-enrollment.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { StudentsTransferComponent } from './students-transfer/students-transfer.component';
import { StudentsDisciplinaryComponent } from './students-disciplinary/students-disciplinary.component';
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { StudentsSponsorshipComponent } from './students-sponsorship/students-sponsorship.component';
import { StudentsHealthComponent } from './students-health/students-health.component';

import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';
import { StudentDisciplinaryComponent } from './student/student-disciplinary/student-disciplinary.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentHealthComponent } from './student/student-health/student-health.component';
import { StudentPaymentsComponent } from './student/student-payments/student-payments.component';
import { StudentPerformanceComponent } from './student/student-performance/student-performance.component';
import { StudentPersonalInfoComponent } from './student/student-personal-info/student-personal-info.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentSponsorshipComponent } from './student/student-sponsorship/student-sponsorship.component';

@NgModule({
  imports: [
    StudentsRouterModule,
    NgbModule,
    CommonModule
  ],
  declarations: [StudentsListComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentsHealthComponent,
                StudentAttendanceComponent, StudentDisciplinaryComponent, StudentFormComponent, StudentHealthComponent, StudentPaymentsComponent, StudentPerformanceComponent, StudentPersonalInfoComponent, StudentProfileComponent, StudentSponsorshipComponent],
  exports: [StudentsListComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentsHealthComponent,
                StudentAttendanceComponent, StudentDisciplinaryComponent, StudentFormComponent, StudentHealthComponent, StudentPaymentsComponent, StudentPerformanceComponent, StudentPersonalInfoComponent, StudentProfileComponent, StudentSponsorshipComponent]
})
export class StudentsModule { }
