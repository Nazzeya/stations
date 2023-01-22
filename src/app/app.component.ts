import { Component } from '@angular/core';
import { IStation } from './models/station';
import { stations as data } from './data/stations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stations: IStation[] = data;

  check(value: boolean) {
    if(value==true) return true
    else return false
  }
}
