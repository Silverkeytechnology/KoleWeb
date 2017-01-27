import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-performance',
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.css']
})
export class StudentPerformanceComponent implements OnInit, OnDestroy {
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
