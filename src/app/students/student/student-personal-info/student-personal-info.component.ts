import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../../shared/student.service';



@Component({
  selector: 'app-student-personal-info',
  templateUrl: './student-personal-info.component.html',
  styleUrls: ['./student-personal-info.component.css']
})
export class StudentPersonalInfoComponent implements OnInit,OnDestroy {
  student: Student;
  routedStudentID: string;
  private sub: any;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
                  if(params['id'] !== undefined){
                    this.routedStudentID = params['id'];
                    this.studentService.getStudent(this.routedStudentID)
                      .subscribe(
                            student=>{this.student = student;console.log('returned student: ', student);},
                            error => {this.errorMessage = <any>error;}
                          );
                  }
    });
  }


  ngOnDestroy(){
    this.sub.unsubscribe();

  }

}
