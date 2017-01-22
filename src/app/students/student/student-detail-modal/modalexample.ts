/*import { Component, Input, OnInit,OnDestroy, Compiler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, OnDestroy {
  @Input() student: Student;
  id: string;
  sub: any;

  //constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }
  constructor(private route: ActivatedRoute, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id: ', this.id);
    });

  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  public open(_student: Student) {
    //this.compiler.clearCacheFor(student-detail-modal-content); only when the template is caching
    //const modalRef = this.modalService.open(StudentDetailContent);
    //modalRef.componentInstance.student = _student;
  }


}
*/

//------------------------------------------
/* tslint:disable:no-unused-variable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentProfileComponent } from './student-profile.component';

describe('StudentProfileComponent', () => {
  let component: StudentProfileComponent;
  let fixture: ComponentFixture<StudentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

-------------------------------------------
<router-outlet></router-outlet>

<div class="modal-header">
  <h4 class="modal-title">Hi there</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <div id="accordion" role="tablist" aria-multiselectable="true">
    <div class="card">
      <div class="card-header" role="tab" id="personalInfo">
        <h5 class="mb-0">
          <a data-toggle="collapse" data-parent="#accordion" href="#personalInfoOutlet" aria-expanded="true" aria-controls="personalInfoOutlet">
          Personal Info
          </a>
        </h5>
      </div>

      <div id="personalInfoOutlet" class="collapse show" role="tabpanel" aria-labelledby="personalInfo">
        <div class="card-block">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="performance">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#performanceOutlet" aria-expanded="false" aria-controls="performanceOutlet">
            Performance
          </a>
        </h5>
      </div>
      <div id="performanceOutlet" class="collapse" role="tabpanel" aria-labelledby="performance">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="attedance">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#attedanceOutlet" aria-expanded="false" aria-controls="attedanceOutlet">
            Attendance
          </a>
        </h5>
      </div>
      <div id="attedanceOutlet" class="collapse" role="tabpanel" aria-labelledby="attendance">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="disciplinary">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#disciplinaryOutlet" aria-expanded="false" aria-controls="disciplinaryOutlet">
            Disciplinary
          </a>
        </h5>
      </div>
      <div id="disciplinaryOutlet" class="collapse" role="tabpanel" aria-labelledby="disciplinary">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="health">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#healthOutlet" aria-expanded="false" aria-controls="healthOutlet">
            Health
          </a>
        </h5>
      </div>
      <div id="healthOutlet" class="collapse" role="tabpanel" aria-labelledby="health">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="payments">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#paymentsOutlet" aria-expanded="false" aria-controls="paymentsOutlet">
            Payments
          </a>
        </h5>
      </div>
      <div id="paymentsOutlet" class="collapse" role="tabpanel" aria-labelledby="payments">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="sponsorship">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#sponsorshipOutlet" aria-expanded="false" aria-controls="sponsorshipOutlet">
            Sponsorship
          </a>
        </h5>
      </div>
      <div id="sponsorshipOutlet" class="collapse" role="tabpanel" aria-labelledby="sponsorship">
        <div class="card-block">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>

</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
</div>
------------------------
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

  onSelect(student: Student) {
    /*this.router.navigate(['/students-center/students-list', student._id]);
    console.log("student._id: ", student._id);
    console.log("student._id type: ", typeof(student._id));

    this.router.navigate(['/student-profile/', student._id]);

  }
}
*/
