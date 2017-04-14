import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class LocationService{
	 locations:any=[];


  constructor(private http: Http) { }

 
  getAllLocation() {
    return this.http.get('https://guidemeesprit.herokuapp.com/api/musee')
      .map(res => res.json());
  }


getLocationDetails(id) {
    return this.http.get(`https://guidemeesprit.herokuapp.com/api/musee/${id}`)
      .map(res => res.json());
  }

  // addLocation(location){
  // 	this.http.post('http://localhost:3000/api/musee/',location)
  //   return this.locations.push(location);
  // }

addLocation(data) {
    return new Promise((resolve, reject) => {
        this.http.post('https://guidemeesprit.herokuapp.com/api/musee',data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


updateLocation(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('https://exemple.herokuapp.com/api/A/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  
    deleteLocation(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('https://guidemeesprit.herokuapp.com/api/musee/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


// updateLocation(location,id){
//   var headers = new Headers();
//     headers.append( 'Content-Type', 'application/json' );
//       return new Promise((resolve, reject) => {
//     this.http.put('https://guidemeesprit.herokuapp.com/api/musee/'+location._id, JSON.stringify(location),{headers:headers})   .map(res => res.json())
//           .subscribe(res => {
//             resolve(res);
//           }, (err) => {
//             reject(err);
//           });
//     });
  
// }}


  // addLocation(data){
  // 	console.log(data);
  // 	var headers = new Headers();
  // 	headers.append('Content-Type','application/json');
  // 	return this.http.post('http://localhost:3000/api/musee',JSON.stringify(data),{headers:headers})
  //    .map(res => res.json());

  // }

}






