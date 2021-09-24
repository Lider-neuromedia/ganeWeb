import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './../services/home.service';
import { CampanaService } from './../services/campana.service';
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $ : any; 
declare var carouselGane;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  isSubmitted = false;
  registrationForm: FormGroup;
  dynamicFormArray: any;
  valorApuesta: number;
  valorModalidad: number;
  rta: number;
  respuesta : number;
  //valorApostar;
  //valorModal;
  valorApostar:any="";
  valorModal:any = "";

  sliderprincipal_data:any[] = [];
  recuadros_data:any[] = [];
  ganevirtual_data:any = {};
  puntosventa_data:any = {};
  campanas_data:any[] = [];

  loader = true;
  totalCount = 1;

  public suscrito: any;

  

  constructor(private _router:Router, private httpClient:HttpClient, private fb:FormBuilder, private _homeservice:HomeService, private _campanaservice:CampanaService) {
    this.suscrito = {
      nombre: '',
      email: '',
      acepto:''
    };
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      
    });

    //Calling API to get Dynamic Control Details
    this.httpClient.get('./assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;
      this.createFormControl();
    });

    this._homeservice.getHome()
    .subscribe((res:any) => {
      console.log(res);
      this.sliderprincipal_data = res.acf.slider_principal;
      this.recuadros_data = res.acf.recuadros_seccion2;
      this.ganevirtual_data = res.acf.virtual_seccion3;
      this.puntosventa_data = res.acf.puntos_de_venta_seccion5;
      this.loader = false;
      carouselGane();
    });

    this._campanaservice.getCampanas()
    .subscribe((res:any) => {
      this.campanas_data = res;
    });
  }
  
  verCampana(slug:string){
    this._router.navigate(['/campana', slug]);
  }

  createFormControl() {
    this.dynamicFormArray.forEach(element => {
      if(element.Required === true){
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      }else{
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
      
    });
    // console.log(this.registrationForm);
  }

  enviarSuscribir(form){
    $.ajax({
      url: 'https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/suscribirse.php',
      type: 'POST',
      data: JSON.stringify(this.suscrito),
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

   customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:2500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  
}
