import { Component, OnInit } from '@angular/core';
import { Telephone } from 'src/app/interfaces/telephone';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements Telephone {

  id = "1"
  number = "8777777"

}
