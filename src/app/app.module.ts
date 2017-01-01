import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { appRouter } from './app.router'


@NgModule({
  declarations: [AppComponent],
  imports: [
    appRouter,
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
