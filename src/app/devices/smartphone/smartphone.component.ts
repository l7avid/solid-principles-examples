import { Component, OnInit } from '@angular/core';
import { SmartPhone } from 'src/app/interfaces/smartphone';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements SmartPhone {
  
  id = "2"
  number = "3000000000"
  whatsapp = true
  cameraResolutionInMpx = 80;

}
