import { Component, OnInit } from '@angular/core';
import { IAuthdata } from 'src/app/interfaces/iauthdata';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged:boolean = this.authService.isUserLogged
  name:string = '';

  auth:IAuthdata = {
    email: '',
    password: ''
  };

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.loggedObs.subscribe((res:boolean)=> {
      this.logged = res;
    })
    this.getName()
  }

  login(){
    this.authService.login(this.auth).subscribe((res:any)=>{
      this.authService.logUser(res.accessToken , res.user)
      // this.authService.isUserLogged = true ;
      // this.logged =  this.authService.isUserLogged
    });
  }
  logout(){
    this.authService.logout()

  }
  getName(){
    let user:any = localStorage.getItem('user')
    this.name = JSON.parse(user).name
  }
}
