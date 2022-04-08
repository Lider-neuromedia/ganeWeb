import { Component, OnInit } from '@angular/core';
import { PagesService } from './../services/pages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $: any;

@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css'],
})
export class SoatComponent implements OnInit {
  public usersoat: any;
  soat_data: any = {};
  loader = true;

  constructor(private _soatservice: PagesService, private http: HttpClient) {
    this.usersoat = {
      nombre: '',
      cedula: '',
      placa: '',
      email: '',
      celular: '',
      vencimiento: '',
      acepto: '',
    };
  }

  ngOnInit(): void {
    this._soatservice.getSoat().subscribe((res: any) => {
      this.loader = false;
      this.soat_data = res;
    });
  }

  enviarSoatFecha(form) {
    $.ajax({
      url: 'https://gane.com.co/api/wp-content/themes/gane/soat.php',
      type: 'POST',
      data: JSON.stringify(this.usersoat),
      dataType: 'json',
      success: function (data) {},
      error: function (error) {
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title:
              'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true,
          });
          form.reset();
        } else {
          Swal.fire(
            'Oops...',
            'Algo pasó. Corrige los errores, por favor!',
            'error'
          );
        }
      },
    });
  }
}
