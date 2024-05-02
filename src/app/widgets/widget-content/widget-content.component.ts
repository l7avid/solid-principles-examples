import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-content',
  templateUrl: './widget-content.component.html',
  styleUrls: ['./widget-content.component.css']
})
export class WidgetContentComponent {

  onExportJson() {
    console.log('Export Json logic..');
  }
}
