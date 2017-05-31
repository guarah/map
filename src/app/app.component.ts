import { Component, OnInit } from '@angular/core';

import 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  drawnItems = null;
  leftVisible = false;
  rightVisible = false;


  ngOnInit(): void {

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.drawnItems = new L.FeatureGroup(null);
     map.addLayer(this.drawnItems);
     const drawControl = new L.Control.Draw({
         edit: {
             featureGroup: this.drawnItems
         }
     });
     map.addControl(drawControl);
  }

  toggleLeft() {
    this.leftVisible = !this.leftVisible;
  }

  toggleRight() {
    this.rightVisible = !this.rightVisible;
  }

}
