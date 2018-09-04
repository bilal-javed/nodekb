import { Component } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { User } from '../../../../User';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  users: User[];

  constructor(private userService:UserService){
    // this.userService.getUser().subscribe(
    //   users=>{
    //     console.log(users);
    //   }
    // );
  }
 }
