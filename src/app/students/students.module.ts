import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgLocalization } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsCenterComponent } from './students-center/students-center.component';
import { StudentsRouterModule } from './students-router/students-router.module';
import { StudentModule } from './student/student.module';
import { StudentsEnrollmentComponent } from './students-enrollment/students-enrollment.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { StudentsTransferComponent } from './students-transfer/students-transfer.component';
import { StudentsDisciplinaryComponent } from './students-disciplinary/students-disciplinary.component';
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { StudentsSponsorshipComponent } from './students-sponsorship/students-sponsorship.component';
import { StudentsHealthComponent } from './students-health/students-health.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    StudentsRouterModule,
    StudentModule
  ],
  declarations: [StudentsListComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentsHealthComponent, StudentAttendanceComponent],
  //entryComponents: [StudentDetailContent],
  exports: [StudentsListComponent,StudentsDashboardComponent, StudentsCenterComponent, StudentsEnrollmentComponent, StudentsAttendanceComponent, StudentsPerformanceComponent, StudentsTransferComponent, StudentsDisciplinaryComponent, StudentsPaymentsComponent, StudentsSponsorshipComponent, StudentsHealthComponent, StudentAttendanceComponent]
})
export class StudentsModule { }
