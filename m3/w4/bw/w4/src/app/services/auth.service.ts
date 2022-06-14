import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,  } from 'rxjs';
import { IAuthdata } from '../interfaces/iauthdata';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:4201/login'



  constructor(private http:HttpClient) { }

  login(authData:IAuthdata):Observable<IAuthdata>{
    return this.http.post<IAuthdata>(this.apiUrl, authData)

  }

  logUser(token:string, user:User){
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(user))

  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

}

