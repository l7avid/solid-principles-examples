import { Component, Input, OnInit } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-widget-content',
  templateUrl: './widget-content.component.html',
  styleUrls: ['./widget-content.component.css']
})
export class WidgetContentComponent extends WidgetBaseComponent {

  @Input()
  title:string = "Weather"

  //We are violating the liskov substitution principle because when we are overriding the parent's method we are changing its return value, it means, we are modifying its behaviour

  override onExportJson(): string {
    super.onExportJson();
    console.log("Hello from child")
    return "Hello from child"
  }
}
