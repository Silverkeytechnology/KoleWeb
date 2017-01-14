//import rxjs/RX; //adds ALL RXJS statics & operators to observable

//see node_module/rxjs/Rxjs.js
//import just the rxjs statics and operators needed for this app

//statics
import 'rxjs/add/observable/throw';

//operators
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/debounceTime';
import  'rxjs/add/operator/distinctUntilChanged';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';
import  'rxjs/add/operator/toPromise';
import  'rxjs/add/operator/count';
