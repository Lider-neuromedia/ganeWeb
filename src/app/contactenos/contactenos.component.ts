import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  public user: any;

  constructor() { 
    this.user = {
      nombre_completo: '',
      correo_electronico: '',
      telefono: '',
      tipo_consulta: '',
      asunto: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado!!");
    console.log(this.user);
  }

}
