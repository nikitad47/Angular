import { SubjectService } from './../subject.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit{

  name: string = ' ';
  constructor(private subjectService: SubjectService){}

  ngOnInit(): void {
    this.subjectService.commonData$.subscribe((data:any) =>
    {
      this.name = data;
    })
  }



}
