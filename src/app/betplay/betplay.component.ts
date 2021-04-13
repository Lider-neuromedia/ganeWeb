import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-betplay',
  templateUrl: './betplay.component.html',
  styleUrls: ['./betplay.component.css']
})
export class BetplayComponent implements OnInit {
  seccion_1_data:any = {};
  seccion_1_video:any = {};
  seccion_2_data: {};
  seccion_3_data:any = {};
  seccion_tabla_data:any[] = [];
  urlSafe: SafeResourceUrl;

  loader = true;
  totalCount = 5;

  constructor(private httpClient:HttpClient, private _betplayservice:PagesService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var video, results;
    this._betplayservice.getBetplay()
    .subscribe((res:any) => {
      console.log(res);
      this.loader = false;
      this.seccion_1_data = res.seccion_1;
      this.seccion_1_video = res.seccion_1.link_video;
      this.seccion_2_data = res.seccion_2_img;
      this.seccion_3_data = res.seccion_3;
      this.seccion_tabla_data = res.seccion_tabla;
      if(this.seccion_1_video === null || this.seccion_1_video === ''){
        return '';
      }
      results = this.seccion_1_video.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? this.seccion_1_video : results[1];
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.seccion_1_video); 
    });
  }
}
