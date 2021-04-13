import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './../services/posts.service';
import { Router } from '@angular/router'; 
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  comunicados_data:any[] = [];
  filterComunicado = '';
  texto:string;
  
  loader = true;
  totalCount = 4;

  constructor(private _router:Router, private _comunicadosservice:PostsService) { }

  ngOnInit(): void {
    
  this._comunicadosservice.getComunicados()
    .subscribe((res:any) => {
      if(this.texto != ""){
        this.loader = false;
        this.comunicados_data = res;
      }else if(this.texto == ""){
        this.loader = false;
        this.comunicados_data = res;
      }else{
        this.loader = false;
        this.comunicados_data = [];
      }
    });
  }

  search(){
    this._comunicadosservice.getComunicados()
    .subscribe((resp:any) => {
      if(this.texto != ""){
        this.comunicados_data = [];
        this.texto = this.texto.toLowerCase();
        for(let comunicado of resp){
          let titulo = comunicado.title.rendered.toLowerCase(); 
          if(titulo.indexOf(this.texto) >= 0){
            this.comunicados_data.push(comunicado);
          }
        }
      }else if(this.texto == ""){
        this.ngOnInit();
      }
    })
  }

  verComunicado(slug:string){
    this._router.navigate(['/comunicado/', slug]);
  }

}
