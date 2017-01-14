
// Add the RxJS Observable operators.
import './rxjs-operators';
import { Component } from '@angular/core';
import { StudentService } from './students/shared/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'Welcome to Kole Students';
}
