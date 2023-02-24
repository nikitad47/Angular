import { Form } from './../model/form';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor() { }

  getDetails(){
    return{
      fname:'Nikita', lname:'Dara', address:'Solapur', age:22, type:'Professional'
    }
  }

  getForm(data : Form){
    console.log(data)
  }
}
