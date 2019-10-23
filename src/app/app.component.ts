import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(private appService: AppService) {}
 
 movies: any[];

 ngOnInit() {
   this.appService.getMovies()
    .subscribe(data => this.movies = data);
 }

}
