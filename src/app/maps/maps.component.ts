import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { Plugins } from "@capacitor/core";
import { from } from "rxjs";
import { GoogleMapsAPIWrapper, MapsAPILoader } from "@agm/core";
import { IonSearchbar } from "@ionic/angular";

export interface Coords {
  lat: number;
  lng: number;
}

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"],
})
export class MapsComponent implements OnInit, AfterViewInit {
  coords: Coords[] = [];
  origin: Coords = {
    lat: 44.3231406,
    lng: 23.6665813,
  };
  zoom = 15;
  directionsRenderer: any;
  directionsService: any;
  ngZone: any;
  map: any;

  constructor(private mapsAPILoader: MapsAPILoader) {}

  ngOnInit() {
    // this.getCurrentPosition();
  }

  onMapReady(evt) {
    this.map = evt;
  }

  ngAfterViewInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // this.geoCoder = new google.maps.Geocoder();
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
      });
      this.directionsService = new google.maps.DirectionsService();
    });
  }

  onMapClick({ coords }) {
    // console.log(coords);
    this.coords.push(coords);
    this.drawDirectionsRoute();
  }

  private setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.origin.lat = position.coords.latitude;
        this.origin.lng = position.coords.longitude;
      });
    }
  }

  drawDirectionsRoute() {
    if (this.coords.length > 0) {
      const lastIndex = this.coords.length - 1;
      this.directionsRenderer.setMap(this.map);
      this.directionsService.route(
        {
          origin: { lat: this.origin.lat, lng: this.origin.lng },
          destination: {
            lat: this.coords[lastIndex].lat,
            lng: this.coords[lastIndex].lng,
          },
          waypoints: [],
          optimizeWaypoints: true,
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            this.directionsRenderer.setDirections(response);
          }
        }
      );
    }
  }
}
