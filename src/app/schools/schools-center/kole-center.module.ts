import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KoleDashboardComponent } from './kole-dashboard/kole-dashboard.component';
import { KoleCenterRouterModule } from './kole-center-router/kole-center-router.module';


@NgModule({
  imports: [
    CommonModule,
    KoleCenterRouterModule
  ],
  declarations: [KoleDashboardComponent]
  exports: [KoleDashboardComponent]
})
export class KoleCenterModule { }
