import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoggerService } from '../logger/logger.service';
import { SpinnerState } from './spinner.service';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit,OnDestroy {

  visible = false;

  private spinnerSateChanged: Subscription;

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    console.log(this.visible);
    this.spinnerSateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        this.visible = state.show;
        this.loggerService.log(`visible=${this.visible}`);
      });
  }
  ngOnDestroy() {
    this.spinnerSateChanged.unsubscribe();

  }

}
