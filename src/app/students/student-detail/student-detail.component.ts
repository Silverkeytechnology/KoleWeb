import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { switchMap } from 'rxjs/add/operator/switchMap';
import { StudentService } from '../shared/student.service';
import { Student } from '../student-model/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() name;
  student: Student;

  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, private router: Router, private service: StudentService) { }
  ngOnInit() {
    console.log("Routed to here!");
//    this.open();
  /*  this.route.params
      //(+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getStudent(params['id']))
      .subscribe((student: Student) => {this.student = student; console.log("Student: ", student);});
      */
  }
  /*
  onBack() {

  }
  */

}
