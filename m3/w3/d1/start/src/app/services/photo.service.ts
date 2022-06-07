import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhotos(){
     return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
     .pipe(
       catchError(err => throwError(err))
     )

  }

  deletePhoto(id:number){
    return this.http.delete('https://jsonplaceholder.typicode.com/photos'+id).pipe(
      catchError(err => throwError(err))
    )
  }

}
