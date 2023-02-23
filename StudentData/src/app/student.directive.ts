import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStudent]'
})
export class StudentDirective {
  @Input() gender:string='';
  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(this.gender == "F")
    {
      this.el.nativeElement.style.backgroundColor='grey';
    }
    else
    {
      this.el.nativeElement.style.backgroundColor='cyan'    }
  }
}
