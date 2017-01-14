import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentProfileModule } from './student-profile/student-profile.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsCenterComponent } from './students-center/students-center.component';
import { StudentsRouterModule } from './students-router/students-router.module';
import { StudentsEnrollmentComponent } from './students-enrollment/students-enrollment.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { StudentsTransferComponent } from './students-transfer/students-transfer.component';
import { StudentsDisciplinaryComponent } from './students-disciplinary/students-disciplinary.component';
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { StudentsSponsorshipComponent } from './students-sponsorship/students-sponsorship.component';
import { StudentDetailModalComponent, StudentDetailContent } from './student-detail-modal/student-detail-modal.component';
import { StudentHealthComponent } from './student-health/student-health.component';
import { StudentsHealthComponent } from './students-health/students-health.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    StudentsRouterModule,
    StudentProfileModule
  ],
  declarations: [StudentsListComponent, StudentDetailContent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentDetailModalComponent, StudentHealthComponent, StudentsHealthComponent, StudentAttendanceComponent],
  entryComponents: [StudentDetailContent],
  exports: [StudentsListComponent,StudentDetailContent, StudentFormComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentDetailModalComponent]
})
export class StudentsModule { }
