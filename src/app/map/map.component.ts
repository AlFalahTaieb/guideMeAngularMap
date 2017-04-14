import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	 location = {};
   setPosition(position){
      this.location = position.coords;
      console.log(this.location);
      }
  lat=location.latitude
  lng=location.longitude;

  locations:any=[];




  constructor() { }

  ngOnInit() { 
  	   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
   }

   }
  


