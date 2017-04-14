import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2';
import { Router } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.subscribe(user => {
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }

}