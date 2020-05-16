import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  coords: {lat:number,lng:number}[]=[]
  constructor() { }

  ngOnInit() {
  }

  onMapClick({coords}) {
    console.log(coords);
    this.coords.push(coords);
  }

}
