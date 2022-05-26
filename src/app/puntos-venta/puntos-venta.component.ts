import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapsService } from './../services/maps.service';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
import Swal from 'sweetalert2';

declare var $: any;

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
  shadowSize: [41, 41],
});
const iconUser = L.icon({
  iconRetinaUrl,
  iconUrl: './assets/punto_de_ventas/pin_userPNG.png',
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
const iconGane = L.icon({
  iconRetinaUrl,
  iconUrl: './assets/punto_de_ventas/pin_ganePNG.png',
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
// L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-puntos-venta',
  templateUrl: './puntos-venta.component.html',
  styleUrls: ['./puntos-venta.component.css'],
})
export class PuntosVentaComponent implements OnInit, AfterViewInit {
  private map;

  data: any = [];
  dataMaps: any = [];
  texto: any;
  dataMapsArr: any[] = [];
  loader = true;
  dataFiltro: string[] = ['Apuestas', 'Giros', 'Recargas', 'BetPlay', 'Pagos'];
  monto: number;
  pnt_apertura: string;
  pnt_cierre: string;
  filtro: string = 'Giros';
  lat: number;
  long: number;
  srvGlobal: any;

  public formMaps: Array<Select2OptionData>;
  public options: Options;
  public formControl = new FormControl();
  marker: any;

  constructor(private form: FormBuilder, private _maps: MapsService) {}

  ngOnInit(): void {
    $('#filtro').select2({
      placeholder: 'Giros, Apuesta',
      language: {
        noResults: function () {
          return 'No hay resultado';
        },
        searching: function () {
          return 'Buscando..';
        },
      },
    });

    $('#filtro').change(function () {
      filtraDatos($(this).val());
    });

    const filtraDatos = (srv) => {
      this.srvGlobal = srv;
      // this.puntosMapa(srv);
    };

    $('#direcciones').select2({
      placeholder: 'Seleccione una dirección',
      language: {
        noResults: function () {
          return 'No hay resultado';
        },
        searching: function () {
          return 'Buscando..';
        },
      },
    });

    $('#direcciones').change(function () {
      custom2(JSON.parse($(this).val()));
    });

    const custom2 = (val: any) => {
      this.onSearch(val);
    };
  }

  llenarFiltro() {
    this.monto === 0 ? (this.monto = null) : this.monto;
    if (this.monto === null) {
      return;
    }
  }

  onSearch(val: any) {
    this.custom(val);
  }

  custom(val: any) {
    this.texto = val;
    this.pnt_apertura = val.pnt_apertura;
    this.pnt_cierre = val.pnt_cierre;
    this.map.flyTo([val.pnt_geox, val.pnt_geoy], 18);
  }

  ngAfterViewInit(): void {
    this.crearMapa();
  }

  crearMapa() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
      },
      (err) => {
        alert('No se encontró la ubicación');
      }
    );
    this.map = L.map('map');
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
    this.map.locate({
      enableHighAccuracy: true,
      setView: true,
      maxZoom: 15,
      timeout: 5000,
    });
    this.map.on('locationfound', (e) => {
      const coords = [e.latlng.lat, e.latlng.lng];
      L.marker(coords, { icon: iconUser })
        .bindPopup(
          '<h6 style="color: #192D6D; font-size=21px;">Tu Ubicación</h6>'
        )
        .addTo(this.map);
    });
  }

  puntosMapa(srv: string) {
    Swal.fire('Reubicando puntos', 'Espere por favor', 'info');
    Swal.showLoading();
    this.data = {
      puntoGeox: 11,
      puntoGeoy: 19,
      srv_nombre: srv,
      monto: this.monto,
    };
    this._maps.getLocations(this.data).subscribe((res: any) => {
      let latRedondeo = this.lat.toFixed(2);
      let longRedondeo = this.long.toFixed(2);
      let i = 0;
      for (let direccion of res.respuesta) {
        if (
          direccion.pnt_geox !== null &&
          direccion.pnt_geoy !== null &&
          direccion.pnt_geox.toFixed(2) == latRedondeo &&
          direccion.pnt_geoy.toFixed(2) == longRedondeo
        ) {
          this.marker = L.marker([direccion.pnt_geox, direccion.pnt_geoy], {
            icon: iconGane,
          })
            .bindPopup(
              '<h6 style="color: #192D6D; font-size=21px;">' + srv + '</h6>'
            )
            .addTo(this.map);
          this.dataMaps.push(res.respuesta[i]);
        }
        i++;
      }
      Swal.close();
    });
  }
}
