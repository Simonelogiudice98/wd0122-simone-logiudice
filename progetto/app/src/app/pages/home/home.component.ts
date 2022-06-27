import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   strLat:any;
   strLng:any;

  constructor() { }

  ngOnInit(){
    if(!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(
        this.strLat = position.coords.latitude, this.strLng = position.coords.longitude
        );

      })
    }

  ngAfterViewInit(): void {
    let loader = new Loader({
      apiKey:'AIzaSyCbhuHXXPaMHnBIsU5M_09yRB33yID2A0U'
    })

    loader.load().then(()=>{
      let mappa = document.getElementById('map')
      if(mappa){

        new google.maps.Map(mappa,{
          center: {lat: this.strLat, lng: this.strLng},
          zoom: 10

        })
      }
    })
  }



}
