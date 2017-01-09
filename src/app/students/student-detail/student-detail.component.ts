import { StudentService } from '../shared/student.service';
import { Input, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Student } from '../student-model/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']

})
export class StudentDetailComponent implements OnInit {
  @Input()
   public alerts: Array<IAlert> = [];

   private backup: Array<IAlert>;

   public closeAlert(alert: IAlert) {
     const index: number = this.alerts.indexOf(alert);
     this.alerts.splice(index, 1);
   }

   public reset() {
     this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
   }

  student: Student;

  constructor(private route: ActivatedRoute, private router: Router, private service: StudentService) {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert',
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert',
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  ngOnInit() {
    console.log("Routed to here!");
    this.route.params
      //(+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getStudent(params['id']))
      .subscribe((student: Student) => {this.student = student; console.log("Student: ", student);});
  }
  onBack() {

  }

}
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
