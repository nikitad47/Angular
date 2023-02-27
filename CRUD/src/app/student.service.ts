import { Student } from './../model/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  list : Student[]=[];

  getStudents()
  {
    this.list =  [
      {id:11,name:'Nikita',gender:'F',class:'11',rank:1,address:'Solapur',age:22},
      {id:54,name:'Abby',gender:'M',class:'11',rank:2,address:'Solapur',age:22},
      {id:21,name:'Yesasvi',gender:'F',class:'12',rank:3,address:'Solapur',age:22},
      {id:89,name:'Mohan',gender:'M',class:'12',rank:4,address:'Solapur',age:22},
      {id:76,name:'Ganesh',gender:'M',class:'10',rank:5,address:'Solapur',age:22}
    ];

    return this.list;
}
}
