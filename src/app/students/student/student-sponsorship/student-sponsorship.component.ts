import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-sponsorship',
  templateUrl: './student-sponsorship.component.html',
  styleUrls: ['./student-sponsorship.component.css']
})
export class StudentSponsorshipComponent implements OnInit {
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
