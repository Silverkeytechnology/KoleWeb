import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './shared/navigation-header/navigation-header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { PageFooterComponent } from './shared/page-footer/page-footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    SideMenuComponent,
    PageFooterComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
