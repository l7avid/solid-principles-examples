import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmartphoneComponent } from './devices/smartphone/smartphone.component';
import { PhoneComponent } from './devices/phone/phone.component';
import { TelephoneComponent } from './devices/telephone/telephone.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneComponent,
    PhoneComponent,
    TelephoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
