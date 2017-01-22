import { Router } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, AfterViewInit {
  students: Student[];
  errorMessage: string;

constructor(private router: Router,private studentservice: StudentService) {  }

  ngOnInit() {
    this.studentservice.getStudents()
                        .subscribe(
                          students => {this.students = students;},
                          error => {this.errorMessage = <any>error;}
                        );
  }

  ngAfterViewInit() {

  }

  onSelect(student: Student) {
    //this.router.navigate([{outlets: {[menucontent:, ['/students-center/students-list/',student._id]]}}]);
  }
}
