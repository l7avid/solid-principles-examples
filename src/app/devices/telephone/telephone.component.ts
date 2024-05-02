import { Component, OnInit } from '@angular/core';
import { Phone } from '../../interfaces/phone';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements Phone {

  id = "1"
  number = "8777777"
  whatsapp = false
  // Violating the interface segregation principle, instead of extend of a general interface "Phone", we must create an specific interface for telephone that contains all the attributes a telephone can contains
  cameraResolutionInMpx = 0

}
