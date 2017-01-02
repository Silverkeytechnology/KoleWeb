
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsCenterComponent } from './students/students-center/students-center.component';
import { ClassesDashboardComponent } from './classes/classes-dashboard/classes-dashboard.component';
import { CoursesDashboardComponent } from './courses/courses-dashboard/courses-dashboard.component';
import { InstructorsDashboardComponent } from './instructors/instructors-dashboard/instructors-dashboard.component';
import { SchoolsDashboardComponent } from './schools/schools-dashboard/schools-dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/students-center', pathMatch: 'full', data: {title: 'Kole Students Center!'}},
  { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'}}
];

  export const appRouter = RouterModule.forRoot(appRoutes);
