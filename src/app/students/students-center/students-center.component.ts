import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students-center',
  templateUrl: './students-center.component.html',
  styleUrls: ['./students-center.component.css']
})
export class StudentsCenterComponent implements OnInit {
  totalStudents: number;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getTotalStudents();
  }

  getTotalStudents() {
    this.http.request('https://kole-api.herokuapp.com/api/students').subscribe((res: Response) => {
      if (res.status === 200) {
        this.totalStudents = res.json().length;
      }
    })
  }

}
