import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  location={};
  id;
  title;
  latitude;
  longitude;
  ouverture;
  img;

  constructor(
  	private locationService:LocationService,
  	private router:Router,
  	private route:ActivatedRoute
  	) { }

  ngOnInit() {
  	this.id=this.route.snapshot.params['id'];

  	this.locationService.getLocationDetails(this.id).subscribe(location=>{
  	
		this.title=location.title;
  		this.latitude=location.latitude;
  		this.longitude=location.longitude;
  		this.ouverture=this.ouverture;
  			console.log(location);
  	});
  }

//   onEditSubmit(){
// let location={
// 	title:this.title,
// 	latitude:this.latitude,
// 	longitude:this.longitude,
// 	ouverture:this.ouverture
// }
// this.locationService.updateLocation(this.id,location);
// this.router.navigate(['locations']);
//   }
  onEditSubmit() {
    this.locationService.updateLocation(this.id,this.location).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/location', this.id]);
    }, (err) => {
      console.log(err);
    });
  }


}
