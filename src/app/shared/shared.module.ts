import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  NavigationHeaderComponent,
  SideMenuComponent,
  PageFooterComponent,
  MainContentComponent]
})
export class SharedModule { }
