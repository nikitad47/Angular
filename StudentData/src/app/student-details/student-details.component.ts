import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  @Input() inputStudent : any;
  @Output() newrank = new EventEmitter();

  constructor(private studentService : StudentService){

  }

  sendToParent(student: any)
  {
    this.newrank.emit(student)
  }

  updateDetails(student: any)
  {
    this.studentService.updateRank(student);
  }


}
