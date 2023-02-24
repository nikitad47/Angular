import { UserService } from './service/user.service';
import { Component } from '@angular/core';
import { User } from './model/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService){}

  // user: User=new User()
  title = 'form';

  // sendUser(){
  //   this.userService.getUser(this.user);
  //   this.user= new User();
  // }

  fname = new FormControl('');
  lname = new FormControl('');
  address = new FormControl('');
  age = new FormControl('');

  updateUser(){
    console.log(this.fname.value);
    console.log(this.lname.value);
    console.log(this.address.value);
    console.log(this.age.value);

    this.fname.setValue('First Name')
    this.lname.setValue('Last Name')
    this.address.setValue('Address')
    this.age.setValue('Age')
  }
}
