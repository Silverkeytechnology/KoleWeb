import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';

//Setup Routing
const appRoutes: Routes = [
  { path: 'students-center', component: StudentsComponent},
  { path: 'students-list', component: StudentsListComponent},
  { path: 'student/:id', component: StudentDetailComponent},
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];

RouterModule.forRoot([
  {
    path: 'students',
    component: StudentsComponent
  }
])

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
