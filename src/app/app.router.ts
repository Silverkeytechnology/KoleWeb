
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'students-center', component: StudentsComponent, data: {title: 'Kole Students Center!'}},
  { path: 'students', component: StudentsListComponent, data: {title: 'Kole Students'}},

  { path: '', redirectTo: '/students-center', pathMatch: 'full', data: {title: 'Kole Students Center!'}},
  { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'}}
];

  export const appRouter = RouterModule.forRoot(appRoutes);
