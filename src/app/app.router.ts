import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent, data: {title: 'Welcome to Kole Systems!'}},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

  export const appRouter = RouterModule.forRoot(appRoutes);
