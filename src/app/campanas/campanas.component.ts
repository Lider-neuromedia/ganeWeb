import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampanaService } from './../services/campana.service';
import { Router } from '@angular/router'; 
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {

  campanas_data:any[] = [];
  loader = true;
  subtitulo_data:any;

  constructor(private _router:Router, private _campanaservice:CampanaService, private _campana:PagesService) { }

  ngOnInit(): void {
    this._campanaservice.getCampanas()
    .subscribe((res:any) => {
      this.loader = false;
      this.campanas_data = res;
    });
    this._campana.getCampana()
    .subscribe((res:any) => {
      this.loader = false;
      this.subtitulo_data = res.acf.subtitulo;
    });
  }

  verCampana(slug:string){
    this._router.navigate(['/campana', slug]);
  }

}
