import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-base',
  templateUrl: './widget-base.component.html',
  styleUrls: ['./widget-base.component.css']
})
export class WidgetBaseComponent {

  onExportJson() {
    console.log('Export Json logic..');
  }
}
