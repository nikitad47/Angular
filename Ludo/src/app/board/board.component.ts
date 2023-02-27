import {  Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LudoService } from '../ludo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(private ludoService:LudoService){}
  // Indexes of the paths
  @ViewChild('x6y1') x6y1 !: ElementRef;
  @ViewChild('x6y2') x6y2 !: ElementRef;
  @ViewChild('x6y3') x6y3 !: ElementRef;
  @ViewChild('x6y4') x6y4 !: ElementRef;
  @ViewChild('x6y5') x6y5 !: ElementRef;
  @ViewChild('x6y6') x6y6 !: ElementRef;
  @ViewChild('x1y7') x1y7 !: ElementRef;
  @ViewChild('x2y7') x2y7 !: ElementRef;
  @ViewChild('x3y7') x3y7 !: ElementRef;
  @ViewChild('x4y7') x4y7 !: ElementRef;
  @ViewChild('x5y7') x5y7 !: ElementRef;
  @ViewChild('x6y7') x6y7 !: ElementRef;
  @ViewChild('x1y8') x1y8 !: ElementRef;
  @ViewChild('x1y9') x1y9 !: ElementRef;
  @ViewChild('x2y9') x2y9 !: ElementRef;
  @ViewChild('x3y9') x3y9 !: ElementRef;
  @ViewChild('x4y9') x4y9 !: ElementRef;
  @ViewChild('x5y9') x5y9 !: ElementRef;
  @ViewChild('x6y9') x6y9 !: ElementRef;
  @ViewChild('x7y10') x7y10 !: ElementRef;
  @ViewChild('x7y11') x7y11 !: ElementRef;
  @ViewChild('x7y12') x7y12 !: ElementRef;
  @ViewChild('x7y13') x7y13 !: ElementRef;
  @ViewChild('x7y13') x7y14 !: ElementRef;
  @ViewChild('x7y15') x7y15 !: ElementRef;
  @ViewChild('x8y15') x8y15 !: ElementRef;
  @ViewChild('x9y15') x9y15 !: ElementRef;
  @ViewChild('x9y14') x9y14 !: ElementRef;
  @ViewChild('x9y13') x9y13 !: ElementRef;
  @ViewChild('x9y12') x9y12 !: ElementRef;
  @ViewChild('x9y11') x9y11 !: ElementRef;
  @ViewChild('x9y10') x9y10 !: ElementRef;
  @ViewChild('x10y9') x10y9 !: ElementRef;
  @ViewChild('x11y9') x11y9 !: ElementRef;
  @ViewChild('x12y9') x12y9 !: ElementRef;
  @ViewChild('x13y9') x13y9 !: ElementRef;
  @ViewChild('x14y9') x14y9 !: ElementRef;
  @ViewChild('x15y9') x15y9 !: ElementRef;
  @ViewChild('x15y8') x15y8 !: ElementRef;
  @ViewChild('x15y7') x15y7 !: ElementRef;
  @ViewChild('x14y7') x14y7 !: ElementRef;
  @ViewChild('x13y7') x13y7 !: ElementRef;
  @ViewChild('x12y7') x12y7 !: ElementRef;
  @ViewChild('x11y7') x11y7 !: ElementRef;
  @ViewChild('x10y7') x10y7 !: ElementRef;
  @ViewChild('x8y6') x8y6 !: ElementRef;
  @ViewChild('x8y5') x8y5 !: ElementRef;
  @ViewChild('x8y4') x8y4 !: ElementRef;
  @ViewChild('x8y3') x8y3 !: ElementRef;
  @ViewChild('x8y2') x8y2 !: ElementRef;
  @ViewChild('x8y1') x8y1 !: ElementRef;
  @ViewChild('x7y1') x7y1 !: ElementRef;
  @ViewChild('x7y2') x7y2 !: ElementRef;
  @ViewChild('x7y2') x7y3 !: ElementRef;
  @ViewChild('x7y2') x7y4 !: ElementRef;
  @ViewChild('x7y2') x7y5 !: ElementRef;
  @ViewChild('x7y2') x7y6 !: ElementRef;
  @ViewChild('x2y8') x2y8 !: ElementRef;
  @ViewChild('x3y8') x3y8 !: ElementRef;
  @ViewChild('x4y8') x4y8 !: ElementRef;
  @ViewChild('x5y8') x5y8 !: ElementRef;
  @ViewChild('x6y8') x6y8 !: ElementRef;
  @ViewChild('x8y10') x8y10 !: ElementRef;
  @ViewChild('x8y11') x8y11 !: ElementRef;
  @ViewChild('x8y12') x8y12 !: ElementRef;
  @ViewChild('x8y13') x8y13 !: ElementRef;
  @ViewChild('x8y14') x8y14 !: ElementRef;
  @ViewChild('x10y8') x10y8 !: ElementRef;
  @ViewChild('x11y8') x11y8 !: ElementRef;
  @ViewChild('x12y8') x12y8 !: ElementRef;
  @ViewChild('x13y8') x13y8 !: ElementRef;
  @ViewChild('x14y8') x14y8 !: ElementRef;
  rollDice(){
    console.log("rolled dice");
    // diceValue:any
    this.x7y13.nativeElement.innerHTML = "<span>yu<span>";
  }

}
