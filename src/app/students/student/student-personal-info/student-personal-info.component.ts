import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit,OnDestroy {
  routedStudentID: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*Examples of usage of ActivatedRoute
    const id: Observable<string> = route.params.map(p => p.id);
    const url: Observable<string> = route.url.map(segments => segments.join(''));

    // route.data includes both `data` and `resolve`
    const user = route.data.map(d => d.user);
    console.log('Activated Route: ', this.route.url);
    */

    //Get parent ActivatedRoute of this route
    this.sub = this.route.parent.params.subscribe(params => {
                  this.routedStudentID = params['id'];
                });
    }

  ngOnDestroy(){
    this.sub.unsubscribe();

  }

}
