import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PagesService } from './../services/pages.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cultura-antilavado',
  templateUrl: './cultura-antilavado.component.html',
  styleUrls: ['./cultura-antilavado.component.css']
})
export class CulturaAntilavadoComponent implements OnInit {
  titulo_data:any = {};
  item_menu_data: any;
  public activePillIndex:number = 0;
  urlSafe: SafeResourceUrl;
  arreglo_video : any[] = [];

  loader = true;

  constructor(private _router:Router, private httpClient:HttpClient, private _culturaantilavado:PagesService, public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var video, results;
    this._culturaantilavado.getCulturaAntilavado()
    .subscribe((res:any) => {
      this.loader = false;
      this.titulo_data = res.acf.titulo_principal;
      this.item_menu_data = res.acf.item_menu;
    
      this.item_menu_data.forEach(element => {
        if(element.link_video === null || element.link_video === ''){
          return '';
        }
        else {
        results = element.link_video.match('[\\?&]v=([^&#]*)');
        video = (results === null || results === '') ? element.link_video : results[0];
        this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
        }
      });
    });
  }
  public selectPill(index:number) {
    this.loader = false;
    this._router.navigateByUrl('/cultura-antilavado', {skipLocationChange: true})
    this.activePillIndex = index;
  }
}
