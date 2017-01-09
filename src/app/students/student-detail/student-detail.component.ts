import { StudentService } from '../shared/student.service';
import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
//Import the switchMap operator because you need it later to process the Observable route parameters.
import 'rxjs/add/operator/switchMap';
import { ModalDirective } from 'ng2-bootstrap';

import {Student } from '../student-model/student';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') public modal: ModalDirective;
  student: Student;

  constructor(private route: ActivatedRoute, private router: Router, private service: StudentService) { }

  ngOnInit() {
    console.log("Routed to here!");
    this.route.params
      //(+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getStudent(params['id']))
      .subscribe((student: Student) => {this.student = student; console.log("Student: ", student);});
  }

  public ngAfterViewInit() {
    this.modal.show();
  }

  onBack() {

  }

}
