import { SubjectService } from './../subject.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {

  constructor(private subjectService: SubjectService){}

  passData(){
    this.subjectService.setData('Nikita Dara')
  }

}
