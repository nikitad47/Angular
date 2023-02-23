import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {



   constructor(private heroService: HeroService){}

   heroes = this.heroService.getHeroes();

   selectedHero = {id:0, name: ''}
   heroClick(hero: any){
    this.selectedHero= hero;
   }

   updateHeroFromChild(hero: any){
    console.log("Hero Received");
   }


}
