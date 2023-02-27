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
      {rollNo:11,name:'Nikita',gender:'F',class:'11',rank:1,age:22,address:'Solapur'},
      {rollNo:54,name:'Abby',gender:'M',class:'11',rank:2,age:22,address:'Solapur'},
      {rollNo:21,name:'Yesasvi',gender:'F',class:'12',rank:3,age:22,address:'Solapur'},
      {rollNo:89,name:'Mohan',gender:'M',class:'12',rank:4,age:22,address:'Solapur'},
      {rollNo:76,name:'Ganesh',gender:'M',class:'10',rank:5,age:22,address:'Solapur'}
    ];

    return this.studList;
}

getForm(data : Student){
  console.log(data)
}

  updateRank(student: any): void
  {
    let newInd=student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.studList.length;i++){
      if(student.id==this.studList[i].rollNo){
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
