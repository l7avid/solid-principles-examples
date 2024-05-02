import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/interfaces/phone';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements Phone {
  
  id = "2"
  number = "3000000000"
  whatsapp = true
  cameraResolutionInMpx = 80;

}
