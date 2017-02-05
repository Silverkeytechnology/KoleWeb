import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoggerService } from './logger/logger.service';
import { SpinnerService } from './spinner/spinner.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    ComposeMessageComponent,
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  providers: [LoggerService,SpinnerService]
})
export class SharedModule { 
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };

  }*/
}
