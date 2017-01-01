
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsDashboardComponent } from './students/students-dashboard/students-dashboard.component';
import { ClassesDashboardComponent } from './students/classes-dashboard/classes-dashboard.component';
import { CoursesDashboardComponent } from './courses/courses-dashboard/courses-dashboard.component';
import { InstructorsDashboardComponent } from './instructors/instructors-dashboard/instructors-dashboard.component';
import { SchoolsDashboardComponent } from './schools/schools-dashboard/schools-dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'students-dashboard', component: StudentsDashboardComponent, data: {title: 'Kole Students Center!'}},
  { path: 'classes-dashboard', component: ClassesDashboardComponent, data: {title: 'Kole Classes Center!'}},
  { path: 'courses-dashboard', component: CoursesDashboardComponent, data: {title: 'Kole Courses Center!'}},
  { path: 'instructors-dashboard', component: InstructorsDashboardComponent, data: {title: 'Kole Instructors Center!'}},
  { path: 'schools-dashboard', component: SchoolsDashboardComponent, data: {title: 'Kole Schools Center!'}},
  
  { path: '', redirectTo: '/students-center', pathMatch: 'full', data: {title: 'Kole Students Center!'}},
  { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'}}
];

  export const appRouter = RouterModule.forRoot(appRoutes);
