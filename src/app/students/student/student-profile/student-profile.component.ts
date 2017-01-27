import { Component, Input, OnInit,OnDestroy, Compiler } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Student } from '../student.model';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class StudentProfileComponent implements OnInit, OnDestroy {
  location: Location;

  constructor(location: Location, private route: ActivatedRoute, private router: Router) {
    this.location = location;
   }

  ngOnInit() {

  }

  ngOnDestroy() {
  }
  onBack(){
    this.location.back();
  }
}
