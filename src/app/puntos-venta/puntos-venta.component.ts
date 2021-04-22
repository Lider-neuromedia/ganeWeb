import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { LeafletMap } from './leaflet-map';
import * as L from 'leaflet';

@Component({
  selector: 'app-puntos-venta',
  templateUrl: './puntos-venta.component.html',
  styleUrls: ['./puntos-venta.component.css']
})
export class PuntosVentaComponent implements OnInit, AfterViewInit {

  private map;
  
  constructor() { }
  
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void{
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
