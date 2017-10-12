import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DonateModule } from './donate/donate.module';
import { AppComponent } from './containers/app/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DonateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
