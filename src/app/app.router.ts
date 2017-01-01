import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent, data: {title: 'Welcome to Kole Systems!'}},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'}}
];

  export const appRouter = RouterModule.forRoot(appRoutes);
