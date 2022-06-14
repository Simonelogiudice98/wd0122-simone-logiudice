import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  logged:boolean = this.authService.isUserLogged

  user: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };

  constructor(private userSrv: UsersService, private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.loggedObs.subscribe((res:boolean)=> {
      this.logged = res;
    })
  }

  signup() {
    this.userSrv.registerUser(this.user).subscribe();
  }
}
