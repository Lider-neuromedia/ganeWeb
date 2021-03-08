import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './../services/posts.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  comunicados_data:any[] = [];

  constructor(private _router:Router, private _comunicadosservice:PostsService) { }

  ngOnInit(): void {
    this._comunicadosservice.getComunicados()
    .subscribe((res:any) => {
      this.comunicados_data = res;
    });
  }

  buscarComunicado(text:string){
    console.log(text);
  }

  verComunicado(slug:string){
    this._router.navigate(['/comunicado', slug]);
  }

}
