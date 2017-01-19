import { Component, Input, OnInit,OnDestroy, Compiler } from '@angular/core';
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
