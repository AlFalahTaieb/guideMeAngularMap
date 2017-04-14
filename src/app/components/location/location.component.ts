import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { LocationService } from '../../services/location.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
id :any;
location = {};
imageUrl: any;
latitude=this.latitude;
longitude=this.longitude;
  streetViewControl :boolean=true;

constructor(
private locationService: LocationService,
private router :Router,
private route:ActivatedRoute
) { }

//   ngOnInit() {
// //get ID 
// this.id = this.route.snapshot.params['id'];

//     this.locationService.getLocationDetails(this.id).subscribe(location=> {
//       this.location = location;
//       console.log(location);

//       // @TODO - Storage Ref
//     });
//   }

// ngOnInit(){
//   this.route.params.subscribe(
//   params => {
//       this.id = params['id'];
//       console.log(this.id);
//   });
  

deleteLocation(id) {
  this.locationService.deleteLocation(id).then((result) => {
    this.router.navigate(['/locations']);
  }, (err) => {
    console.log(err);
  });
}

ngOnInit(){
	console.log();
    this.route.params.subscribe(
  params => {
      this.id = params['id'];
      console.log(this.id);
this.location=this.locationService.getLocationDetails(this.id).subscribe(location=>{
  this.location=location;
});
});
  }
}