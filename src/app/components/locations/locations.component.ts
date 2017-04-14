import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { FirebaseService } from '../../services/firebase.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  // styleUrls: ['./locations.component.css']
   styleUrls: ['./css/style.css']
})
export class LocationsComponent implements OnInit {
 locations: any = [];
  streetViewControl :boolean=true;

  lat: number = 48.856614;
  lng: number = 2.352222;
    zoom:number=12;



 // constructor(private firebaseService: FirebaseService) { }
    constructor(private locationService: LocationService, private firebaseService: FirebaseService) {

    }

  // ngOnInit() {
  //   this.firebaseService.getLocations().subscribe(locations => {
  //     console.log(locations);
  //     this.locations = locations;
  //   }, err => { 
  //     console.log(err);
  //   });
  // }

ngOnInit()
{    

this.locationService.getAllLocation().subscribe(locations=>{

this.locations=locations;

});
}
}
