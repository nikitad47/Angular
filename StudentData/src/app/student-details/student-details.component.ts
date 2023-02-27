import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  form = this.studentService.getStudents();

  @Input() inputStudent : any;
  @Output() newrank = new EventEmitter();


  constructor(private studentService : StudentService, private fb: FormBuilder){}

  display: boolean=false;
  myform = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    address: ['', Validators.required],
    age: [0, Validators.required],
    rank: [0, Validators.required]
  })

  sendToParent(student: any)
  {
    this.newrank.emit(student)

  }

  sendData(){
    console.log(this.myform.getRawValue())
    this.display=true;
  }

  updateDetails(student: any)
  {

    this.studentService.updateRank(student);
  }


}
