import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-center',
  templateUrl: './students-center.component.html',
  styleUrls: ['./students-center.component.css']
})
export class StudentsCenterComponent implements OnInit {
  router: Router;
  constructor(_router: Router) {
    this.router = _router;


  }

  ngOnInit() {
    //this.router.navigate(['/students-center']);
  }

}
