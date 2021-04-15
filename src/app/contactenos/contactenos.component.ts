import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {NgForm} from '@angular/forms'
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
  url ="https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/mail.php";

  constructor(private http: HttpClient) { 
    this.user = {
      nombre: '',
      email: '',
      telefono: '',
      consulta: '',
      asunto: ''
    };
  }

  ngOnInit(): void {
    this.loader = false;
  }


enviarForm(formularioContacto :NgForm) {
  $.ajax({
    url: 'https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/mail.php',
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
        formularioContacto.reset();
      } else {
        Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
      }
      
      
    }
  });
    //this.user = {} // definís datosForm como un objeto vacío dentro del scopee para poder user datosForm.propiedad en los ng-model de los inputs
    // $http({
    //     method: 'POST',
    //     url: 'https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/mail.php', // la ruta a tu PHP
    //     params: {
    //     datos: this.user
    //     }
    // });
    // };
    // $user = $_POST['user'];
 }

/*
  onSubmit(){
    alert("Formulario enviado!!");
    console.log(this.user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/mail.php', { title: 'Pruebas de correo' }).subscribe( data => {
        console.log(data);
      })
  }
}
*/
}
