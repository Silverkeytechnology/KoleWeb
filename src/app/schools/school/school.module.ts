import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { SchoolFormComponent } from './school-form/school-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SchoolInfoComponent, SchoolProfileComponent, SchoolFormComponent]
})
export class SchoolModule { }
