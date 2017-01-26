import { Component, Input, OnInit,OnDestroy, Compiler } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Student } from '../student.model';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, OnDestroy {
  @Input() student: Student;
  id: Observable<string>;
  open: Observable<boolean>;
  sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    //this.id = this.route.params.map(route => route.id);
   }

  ngOnInit() {
    const url: string = this.router.url;
    const tree: UrlTree = this.router.parseUrl(url);
    const parentUrl: Observable<string> = this.route.parent.url.map(segments => segments.join(''));
    console.log('url from profile: ', url);
    console.log('tree fromm profile: ', tree);
    console.log('router state from profile: ', this.router.routerState);
    console.log('activated route params for profile: ', this.route.params);
    console.log('url for parent to profile: ', parentUrl);
    //this.id = this.route.params.map(route => route.id.toString());

    //console.log('activated route url parameters: ', this.route.url.parame['open']);
    /*this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('id: ', this.id);
      console.log('route: ', this.route);
    });
    */
  /*  this.router.routerState.root.queryParams.subscribe(parmas => {
      this.id = parmas["id"];
      console.log('id:', this.id);
      console.log('parent: ',   this.route.routerState.root);
    });
    */

  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
