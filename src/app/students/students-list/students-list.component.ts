import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { Component, OnInit} from '@angular/core';
import { Student } from '../student-model/student';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Student[];
  errorMessage: string;

  constructor(private router: Router, private studentservice: StudentService) {  }

  ngOnInit() {
    this.studentservice.getStudents()
                        .subscribe(
                          students => {this.students = students;},
                          error => {this.errorMessage = <any>error;}
                        );
  }

  getStudents() {
  }

/*
The component's onSelect calls the router's navigate method with a link parameters array.
You can use this same syntax in a RouterLink if you decide later to navigate in
 HTML template rather than in component code.
*/
  onSelect(student: Student) {
    this.router.navigate(['/students-center/students-list', student._id]);
    console.log("student._id: ", student._id);
    console.log("student._id type: ", typeof(student._id));
  }
}
