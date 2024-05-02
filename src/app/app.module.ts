import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WidgetContentComponent } from './widgets/widget-content/widget-content.component';
import { WidgetBaseComponent } from './widgets/widget-base/widget-base.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent,
    WidgetContentComponent,
    WidgetBaseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
