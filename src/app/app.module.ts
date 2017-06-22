import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { BandeauCookieComponent } from './bandeau-cookie/bandeau-cookie.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    BandeauCookieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
