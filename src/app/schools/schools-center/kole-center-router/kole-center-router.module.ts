import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { KoleDashboardComponent } from '../kole-dashboard/kole-dashboard.component';


const koleCenterRoutes: Routes[
  {path: 'kole-center', component: KoleDashboardComponent}
];

@NgModule([
  imports: RouterModule.forChild(koleCenterRoutes)
],
  exports: [
    RouterModule
  ]
)

export class KoleCenterRouterModule { }
