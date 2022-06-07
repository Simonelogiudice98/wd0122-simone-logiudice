import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/iphoto';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  // arrPhoto:IPhoto[] = [];
   foto:any[] = [];
   count:number = 0;

  constructor(private PhotoService: PhotoService){

  }

  ngOnInit(){
    this.PhotoService.getPhotos().subscribe((res)=>{
     this.foto = res.slice(0, 10);


    })

  }

  like(){
    this.count++
  }

  elimina(id:number){
    this.PhotoService.deletePhoto(id).subscribe(res=>{
      console.log("Delete",res);
      this.foto = res.slice(0,10)

    })
  }
}
