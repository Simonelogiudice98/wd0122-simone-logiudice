import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };

  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {}

  signup() {
    this.userSrv.registerUser(this.user).subscribe();
  }
}
