import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  NavigationHeaderComponent,
  SideMenuComponent,
  PageFooterComponent,
  MainContentComponent],
  exports: [
  NavigationHeaderComponent,
  SideMenuComponent,
  PageFooterComponent,
  MainContentComponent]
})
export class SharedModule { }
