import { Router,UrlTree, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StudentService } from '../shared/student.service';
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Student } from '../student/student.model';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit, AfterViewInit {
  students: Student[];
  errorMessage: any;

constructor(private router: Router,private route: ActivatedRoute, private studentservice: StudentService) {  }

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
    //students-center/(menucontent:students-list)
    //this.router.navigate([{outlets: {[menucontent: ['/students-center/students-list/',student._id]]}}]);
    //[{outlets: {menucontent: ['students-dashboard']}}]
    //['/students-center/(menucontent:student-profile)', student._id]
    //use relativeTo: route if you choose to use relative paths
    //get the current url from the router
    //(menucontent:student-profile;open=true)
    //const url: string = this.router.url;
    //const tree: UrlTree = this.router.parseUrl(url);
  //  console.log('url: ', url);
    //console.log('this.route.url: ', this.route.url);
    //console.log('tree: ', tree);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": student._id
      }
    };
    //['../', student._id], {relativeTo: this.route
    //this.router.navigate(['students-center/students-list/12']);
    //this.router.navigate([{outlets: {profile: ['students-center','students-list','12']}}]);
    this.router.navigate(['students-center','students-list',student._id]);
  }
}
