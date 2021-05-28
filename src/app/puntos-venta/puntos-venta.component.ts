import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapsService } from './../services/maps.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';

declare var $:any;

const iconRetinaUrl = 'assets/maps/marker-icon-2x.png';
const iconUrl = 'assets/maps/marker-icon.png';
const shadowUrl = 'assets/maps/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-puntos-venta',
  templateUrl: './puntos-venta.component.html',
  styleUrls: ['./puntos-venta.component.css']
})
export class PuntosVentaComponent implements OnInit, AfterViewInit {

  private map;
  
  data:any = [];
  dataMaps:any = [];
  texto:any;
  dataMapsArr:any[] = [];
  loader = true;

  pnt_apertura:string;
  pnt_cierre:string;

  public formMaps: Array<Select2OptionData>;
  public options: Options;
  public formControl = new FormControl();


  constructor(private form: FormBuilder, private _maps:MapsService) { }
  
  ngOnInit(): void {
    this._maps.getLocations(this.data)
    .subscribe((res:any) => {
        this.dataMaps = res;
    });
  }

  onSearch(val:any){
    this.custom(val);
    // $('#direcciones').select2({
    //   placeholder: "Selecciona una dirección",
    //   allowClear: false
    // })
  }
  
  custom(val:any){
    this.texto = val;
    this.pnt_apertura = val.pnt_apertura;
    this.pnt_cierre = val.pnt_cierre;
    this.map.flyTo([val.pnt_geox, val.pnt_geoy], 18);
  }


  ngAfterViewInit(): void{
    this.map = L.map('map', {
      center: [ 3.4211573, -76.5060715 ],
      zoom: 13
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.data = {
      "puntoGeox":11,
      "puntoGeoy":19,
      "srv_nombre":"Giros",
      "monto": 100000
    }
    this._maps.getLocations(this.data)
      .subscribe((res:any) => {
        this.dataMaps = res;
          this.dataMaps = res;
          for(let direccion of res.respuesta){
            const marker = L.marker([direccion.pnt_geox, direccion.pnt_geoy]);
            marker.addTo(this.map);
          }
      }); 
  }
}
