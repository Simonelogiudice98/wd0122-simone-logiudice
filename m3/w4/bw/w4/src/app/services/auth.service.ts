import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable  } from 'rxjs';
import {  tap  } from 'rxjs/operators';
import { IAuthdata, IResponseData } from '../interfaces/iauthdata';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:4201/login'



  constructor(private http:HttpClient) { }
  isUserLogged:boolean = false;

  private isLogged = new BehaviorSubject<boolean>(false)
  loggedObs = this.isLogged.asObservable()


  login(authData:IAuthdata){
    return this.http.post<IResponseData>(this.apiUrl, authData).pipe(
      tap((res)=>{
        console.log('login');
        console.log(res);
        this.isUserLogged = true;
        this.isLogged.next(true)

      })
    )

  }

  logUser(token:string, user:User){
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(user))

  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.isLogged.next(false)
  }

  // isUserLogged(){
  //   return localStorage.getItem('token') =! null && !this.jwtHelper.isTokenExpired(localStorage.getItem('token'))
  // }

}

