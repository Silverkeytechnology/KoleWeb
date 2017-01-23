import { Component, Input, OnInit,OnDestroy, Compiler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, OnDestroy {
  @Input() student: Student;
  id: string;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('id: ', this.id);
      console.log('route: ', this.route);
    });
    */
    this.route.parent.queryParams.subscribe(parmas => {
      this.id = parmas["id"];
      console.log('id:', this.id);
      console.log('parent: ', this.route.parent);
    });

  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
