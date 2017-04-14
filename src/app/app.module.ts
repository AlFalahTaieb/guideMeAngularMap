  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';



//services
import { FirebaseService } from './services/firebase.service';
import { LocationService } from './services/location.service';


//mayjibch les services ama ijib les component

// import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocationComponent } from './components/location/location.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { EditLocationComponent } from './components/edit-location/edit-location.component';
import { MapComponent } from './map/map.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';



// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBN0K-GGLTf45rjIdkhZLvlesCd0lzHIMM',
    authDomain: 'guideme-9b40c.firebaseapp.com',
    databaseURL: 'https://guideme-9b40c.firebaseio.com',
    storageBucket: 'guideme-9b40c.appspot.com',
    messagingSenderId: '615681015494'
};

//Firebase Config hedhi

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



const appRoutes:Routes =[
{path:'', component:HomeComponent},
{path:'locations', component:LocationsComponent},
{path:'location/:id', component:LocationComponent},
{path:'add-location', component:AddLocationComponent},
{path:'edit-location/:id', component:EditLocationComponent},
{path:'map', component:MapComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    NavbarComponent,
    LocationComponent,
    AddLocationComponent,
    EditLocationComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRMaRyNEQQtAe-mI8OWIH0NlswIhz0p_I'
    }),
     FlashMessagesModule,
     AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
     RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
