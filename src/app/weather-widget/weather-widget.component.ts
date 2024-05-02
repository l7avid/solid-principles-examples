import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  @Input()
  widget: 'wether' | 'velocity' = 'wether';
  onExportJson() {
    console.log('Export Json logic..');
  }

}
