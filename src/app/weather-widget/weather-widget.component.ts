import { Component, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  constructor(private jsonExporterService: JsonExporterService) {}

  onExportJson() {
    this.jsonExporterService.onExportJson();
  }
}
