import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent {
  @Input() inputHero: any;
  @Output() newHero = new EventEmitter();

  sendToParent(hero: any){
    this.newHero.emit(hero);
    console.log("inside send");
  }

}
