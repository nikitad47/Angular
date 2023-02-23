import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  studList:Student[] =[];

  getStudents()
  {
    this.studList =  [
      {id:11,name:'Nikita',gender:'F',class:'11',rank:1},
      {id:54,name:'Abby',gender:'M',class:'11',rank:2},
      {id:21,name:'Yesasvi',gender:'F',class:'12',rank:3},
      {id:89,name:'Mohan',gender:'M',class:'12',rank:4},
      {id:76,name:'Ganesh',gender:'M',class:'10',rank:5}
    ];

    return this.studList;
}

  updateRank(student: any): void
  {
    let newInd=student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.studList.length;i++){
      if(student.id==this.studList[i].id){
        oldInd=i;
      }
    }
    old=oldInd;
    let adder=0;
    if(newInd<oldInd){
      adder=1;
    }else{
      adder=-1;
      oldInd=newInd
      newInd=old
    }
    for(let i=newInd;i<oldInd;i++){
      this.studList[i].rank+=adder;
    }
    this.studList[old]=student;
    if(adder==-1){
      this.studList[oldInd].rank+=adder;
    }
    this.sortAsc();
  }

  sortAsc(){
    this.studList.sort((a, b) => {
      return a.rank - b.rank;
    });
    console.log(this.studList)
  }

  sortDesc(){
    this.studList.sort((a, b) => {
      return  b.rank - a.rank;
    });
  }
}
