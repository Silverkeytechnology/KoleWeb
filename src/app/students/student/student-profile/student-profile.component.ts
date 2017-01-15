import { Component, Input, OnInit, Compiler } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  @Input() student: Student;

  //constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }
  constructor() { }

  ngOnInit() {
  }

  public open(_student: Student) {
    //this.compiler.clearCacheFor(student-detail-modal-content); only when the template is caching
    //const modalRef = this.modalService.open(StudentDetailContent);
    //modalRef.componentInstance.student = _student;
  }


}
