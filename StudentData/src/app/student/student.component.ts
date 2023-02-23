import { StudentService } from './../student.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private studentService: StudentService){}

 students = this.studentService.getStudents();

 studList: any=[];

 selectedStudent = {id:0, name:'', gender:'', class:'', rank:''}
 studentClick(student: any){
  this.selectedStudent = student;
 }

 getAscending(){
  this.studList=this.studentService.sortAsc();
  }

  getDescending(){
    this.studList=this.studentService.sortDesc();
  }
}
