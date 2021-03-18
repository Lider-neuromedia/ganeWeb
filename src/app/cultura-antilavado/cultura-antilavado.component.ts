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
  video_gane_url:any = {};
  urlSafe: SafeResourceUrl;

  constructor(private httpClient:HttpClient, private _culturaantilavado:PagesService, public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var video, results;
    this._culturaantilavado.getCulturaAntilavado()
    .subscribe((res:any) => {
      this.titulo_data = res.acf.titulo_principal;
      this.item_menu_data = res.acf.item_menu;
      this.video_gane_url = res.acf.item_menu.link_video;

      if(this.video_gane_url === null || this.video_gane_url === ''){
        return '';
      }
      results = this.video_gane_url.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? this.video_gane_url : results[1];
      this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
    });
}
public selectPill(index:number) {
  this.activePillIndex = index;
  // do some other stuff if necessary...
 }

}
