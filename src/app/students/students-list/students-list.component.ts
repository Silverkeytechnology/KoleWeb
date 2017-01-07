import { Http, Response } from '@angular/http';
import { StudentService } from '../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student-model/student';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Student[];
  errorMessage: string;

  constructor(private studentservice: StudentService) {  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentservice.getStudents()
                        .subscribe(
                          students => {this.students = students;},
                          error => {this.errorMessage = <any>error;}
                        );
  }
}
