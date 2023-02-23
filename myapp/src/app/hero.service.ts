import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(){
    return [
      {id:1, name:'abc'},
      {id:2, name:'pqr'},
      {id:3, name:'def'},
      {id:4, name:'suv'}
    ]
  }
}
