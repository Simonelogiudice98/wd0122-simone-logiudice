import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(){}

  ngAfterViewInit(): void {
    let loader = new Loader({
      apiKey:'AIzaSyCbhuHXXPaMHnBIsU5M_09yRB33yID2A0U'
    })

    loader.load().then(()=>{
      let mappa = document.getElementById('map')
      if(mappa){

        new google.maps.Map(mappa,{
          center: {lat:43.7705637, lng:12.0620695},
          zoom: 10

        })
      }
    })
  }



}
