import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagesService } from './../services/pages.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $ : any; 

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  public user: any;
  loader = true;
  texto_principal_data:any;
  texto_secundario_data:any;
  imagen_principal_data:any;
  info_data:any[] = [];

  url ="https://testing.gane.com.co/api/wp-content/themes/gane/mail.php";

  constructor(private http: HttpClient, private _contactenosservice:PagesService) { 
    this.user = {
      nombre: '',
      email: '',
      telefono: '',
      consulta: '',
      asunto: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this._contactenosservice.getContactenos()
      .subscribe((res:any) => {
        this.loader = false;
        this.texto_principal_data = res.acf.texto_principal;
        this.texto_secundario_data = res.acf.texto_secundario;
        this.imagen_principal_data = res.acf.imagen_principal;
        this.info_data = res.acf.informacion;
      });
  }


enviarForm(form) {
  $.ajax({
    url: 'https://testing.gane.com.co/api/wp-content/themes/gane/mail.php',
    type: 'POST',
    data: JSON.stringify(this.user),
    dataType:"json",
    success: function(data) {
     
    }, error: function(error){
      if(error.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
          showConfirmButton: true
        }); 
        //console.log(error);
      form.reset();
      } else {
        Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
      }
    }
  });
 }
}
