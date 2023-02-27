import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LudoService {

  constructor() { }

  pathValues=[
    {1:"x6y2"},{2:"x6y3"},{3:"x6y4"},{4:"x6y5"},{5:"x6y6"},
    {6:"x5y7"},{7:"x4y7"},{8:"x3y7"},{9:"x2y7"},{10:"x1y7"},
    {11:"x1y8"},{12:"x1y9"},{13:"x2y9"},{14:"x3y9"},{15:"x4y9"},
    {16:"x5y9"},{17:"x6y9"},{18:"x7y10"},{19:"x7y11"},{20:"x7y12"},
    {21:"x7y13"},{22:"x7y14"},{23:"x7y15"},{24:"x6y5"},
    {5:"x6y6"},{6:"x5y7"},{7:"x4y7"},{8:"x3y7"},{9:"x2y7"},
    {1:"x6y2"},{11:"x1y8"},{2:"x6y3"},{3:"x6y4"},{4:"x6y5"},{5:"x6y6"},
    {6:"x5y7"},{7:"x4y7"},{8:"x3y7"},{9:"x2y7"},
    {1:"x6y2"},{11:"x1y8"},{2:"x6y3"},{3:"x6y4"},{4:"x6y5"},{5:"x6y6"},
    {6:"x5y7"},{7:"x4y7"},{8:"x3y7"},{9:"x2y7"}
  ];

  diceValue(){
    return Math.floor(Math.random()*6);
  }
}
