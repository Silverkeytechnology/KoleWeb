import { Component, Input, OnInit, Compiler } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../student-model/student';

@Component({
  selector: 'app-student-detail-content',
  templateUrl: './student-detail-content.html'
})
export class StudentDetailContent {
  @Input() student: Student;
  constructor(public activeModal: NgbActiveModal){}

}

@Component({
  selector: 'app-student-detail-modal',
  templateUrl: './student-detail-modal.component.html',
  styleUrls: ['./student-detail-modal.component.css']
})
export class StudentDetailModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private compiler: Compiler) { }

  public open(_student: Student) {
    //this.compiler.clearCacheFor(student-detail-modal-content); only when the template is caching
    const modalRef = this.modalService.open(StudentDetailContent);
    modalRef.componentInstance.student = _student;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  //  this.open();
  }

}
