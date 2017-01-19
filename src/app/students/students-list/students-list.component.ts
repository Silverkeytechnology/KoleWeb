import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Student } from '../student/student.model';
import { Observable } from 'rxjs/Observable';
import { StudentProfileComponent } from '../student/student-profile/student-profile.component';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, AfterViewInit {
  students: Student[];
  errorMessage: string;
  profile: StudentProfileComponent;


//  constructor(private router: Router, private studentservice: StudentService, private modalService: NgbModal) {  }
constructor(private router: Router,private studentservice: StudentService, private modalService: NgbModal) {  }

  ngOnInit() {
    //instantiate component
    //this.profile = new StudentProfileComponent;
    this.studentservice.getStudents()
                        .subscribe(
                          students => {this.students = students;},
                          error => {this.errorMessage = <any>error;}
                        );
  }

  ngAfterViewInit() {

  }

open(student: Student) {
  //console.log("Detail: ", this.studentDetailComponent);
  //this.studentDetailComponent.open();
    //console.log('profile: ', this.profile);
    //I want to route to modal's component and then invoke modal to open
    this.router.navigate(['student-profile', student._id]);
    this.modalService.open(StudentProfileComponent);


    //modalRef.componentInstance.name = 'Chaiwa';
    //modalRef.result.then((result) => {
    //}, (reason) => {    });

  }


  getStudents() {
  }

/*
The component's onSelect calls the router's navigate method with a link parameters array.
You can use this same syntax in a RouterLink if you decide later to navigate in
 HTML template rather than in component code.
*/
  onSelect(student: Student) {
    /*this.router.navigate(['/students-center/students-list', student._id]);
    console.log("student._id: ", student._id);
    console.log("student._id type: ", typeof(student._id));
    */
    this.router.navigate(['/student-profile/', student._id]);

  }
}
