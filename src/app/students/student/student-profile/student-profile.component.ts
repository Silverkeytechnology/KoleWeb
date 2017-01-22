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
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id: ', this.id);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
