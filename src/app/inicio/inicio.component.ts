import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './../services/home.service';
import { CampanaService } from './../services/campana.service';
import { Router } from '@angular/router'; 

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

  constructor(private _router:Router, private httpClient:HttpClient, private fb:FormBuilder, private _homeservice:HomeService, private _campanaservice:CampanaService) {
    
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
      this.sliderprincipal_data = res.acf.slider_principal;
      this.recuadros_data = res.acf.recuadros_seccion2;
      this.ganevirtual_data = res.acf.virtual_seccion3;
      this.puntosventa_data = res.acf.puntos_de_venta_seccion5;
      this.loader = false;
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

 

}
