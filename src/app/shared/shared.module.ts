import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  exports: [
    PageNotFoundComponent]
})
export class SharedModule { }
