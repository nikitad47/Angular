import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from './model/form';
import { FormService } from './service/form.service';

// import { FormService } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReactiveForm';

  form = this.formService.getDetails();


  constructor(private fb: FormBuilder, private formService: FormService){}

  display: boolean=false;
  myform = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    address: ['', Validators.required],
    age: [0, Validators.required],
    type: ['',Validators.required]
  })

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myform.setValue({
      fname: this.form.fname,
      lname: this.form.lname,
      address: this.form.address,
      age: this.form.age,
      type: this.form.type
    })
  }

  // updateUser(){
  //   console.log(this.fname.value);
  //   console.log(this.lname.value);
  //   console.log(this.address.value);
  //   console.log(this.age.value);

  //   this.fname.setValue('First Name')
  //   this.lname.setValue('Last Name')
  //   this.address.setValue('Address')
  //   this.age.setValue('Age')
  // }

  sendData(){
    console.log(this.myform.getRawValue())
    this.display=true;
    // console.log(this.myform.getRawValue().lname)
    // console.log(this.myform.getRawValue().address)
    // console.log(this.myform.getRawValue().age)
    // console.log(this.myform.getRawValue().type)
  }
}


