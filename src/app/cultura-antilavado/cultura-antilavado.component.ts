import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-cultura-antilavado',
  templateUrl: './cultura-antilavado.component.html',
  styleUrls: ['./cultura-antilavado.component.css']
})
export class CulturaAntilavadoComponent implements OnInit {
  titulo_data:any = {};
  item_menu_data: any[] = [];
  public activePillIndex:number = 0;
  urlSafe: SafeResourceUrl;
  arreglo_video : any[] = [];

  constructor(private httpClient:HttpClient, private _culturaantilavado:PagesService, public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var video, results;
    this._culturaantilavado.getCulturaAntilavado()
    .subscribe((res:any) => {
      this.titulo_data = res.acf.titulo_principal;
      this.item_menu_data = res.acf.item_menu;
    

      // for(let element of this.item_menu_data){
      //   if(element.link_video === null || element.link_video === ''){
      //     return '';
      //   }
        
      //   results = element.link_video.match('[\\?&]v=([^&#]*)');
      //   //video   = element.link_video;
      //   video   = (results === null) ? element.link_video : results[0];
      //   this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
      //   console.log(video);
      // }

      
      this.item_menu_data.forEach(element => {
        if(element.link_video === null || element.link_video === ''){
          return '';
        }
        
        results = element.link_video.match('[\\?&]v=([^&#]*)');
        //video   = element.link_video;
        video   = (results === null) ? element.link_video : results[1];
        this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
        console.log(video);
      });
    });

    
}
public selectPill(index:number) {
  this.activePillIndex = index;
  // do some other stuff if necessary...
 }

}
