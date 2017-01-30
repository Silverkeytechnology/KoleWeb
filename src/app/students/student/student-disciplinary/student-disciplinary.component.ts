import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-disciplinary',
  templateUrl: './student-disciplinary.component.html',
  styleUrls: ['./student-disciplinary.component.css']
})
export class StudentDisciplinaryComponent implements OnInit, OnDestroy {
  routedStudentID: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
                  this.routedStudentID = params['id'];
                });
    }

    ngOnDestroy(){
      this.sub.unsubscribe();

    }

  }
