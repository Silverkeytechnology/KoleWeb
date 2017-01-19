import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit,OnDestroy {
  routedStudentID: string;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Get parent ActivatedRoute of this route
    this.sub = this.route.parent.params.subscribe(params => {
                  this.routedStudentID = params['id'];
                });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
