/*
----Notes---
he response data are in JSON string form. The app must parse that string into JavaScript objects by calling response.json().

This is not Angular's own design. The Angular HTTP client follows the Fetch specification for the response object returned by the Fetch function. That spec defines a json() method that parses the response body into a JavaScript object.
Don't expect the decoded JSON to be the heroes array directly. This server always wraps JSON results in an object with a data property. You have to unwrap it to get the heroes. This is conventional web API behavior, driven by security concerns.
Make no assumptions about the server API. Not all servers return an object with a data property.
*/
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../student/student.model';

@Injectable()
export class StudentService {

 // private studentsUrl = 'https://kole-api.herokuapp.com/api/students'; //URL to web API
  private studentsUrl = 'http://localhost:3000/api/students'; //URL to web API
  constructor(private http: Http) { }

  getStudent(id: string): Observable<Student> {
    let studentURL = this.studentsUrl + '/'+ id;
    return this.http.get(studentURL)
                .map(res => res.json() || {})
                .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || { };
  }

  getStudents(): Observable<any[]> {
    return this.http.get(this.studentsUrl)
                    .map(res => res.json() || {})
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    //In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
