import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class  AddLocationComponent implements OnInit {
  title:any;
  ouverture:string;
  latitude:any;
  longitude:any;
  // ouverture:any;

  location={};


  constructor(
    private LocationService:LocationService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    // let location = {
    //   title: this.title,
    //   altitude: this.altitude,
    //   longitude: this.longitude,
    //   ouverture:this.ouverture,

    // }

this.LocationService.addLocation(this.location).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/locations']);
    }, (err) => {
      console.log(err);
    });
  }

    // this.LocationService.addLocation(location);

    // this.router.navigate(['locations']);
  }
