import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
// import { Location } from '../interfaces/location.interface';



//fetch data from collection as Observable efhmha hakka zid lawj a3léha tayouba
@Injectable()

export class FirebaseService {

  locations: FirebaseListObservable<any[]>;
  location: FirebaseObjectObservable<Location>;

  constructor(private af: AngularFire) { }

getLocations(){
	this.locations=this.af.database.list('/locations') as FirebaseListObservable<Location[]>
return this.locations;
}

getLocationDetails(id){
	//pas de [] khtr c'est un objet alors que elfou9 c'est un tableau
this.location = this.af.database.object('/locations/'+id) as FirebaseObjectObservable<Location>
return this.location;

}


}


interface Location{
	$key?:string;
	image?:string;
	latitude?:number;
	longitude?:number;
	ouverture?:string;
	title?:string;

}