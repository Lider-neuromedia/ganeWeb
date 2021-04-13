import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';
import { Router } from '@angular/router'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  quienesSomos_data:any = {};
  quienesSomos_data_url:any = {};
  urlSafe: SafeResourceUrl;

  loader = true;
  totalCount = 4;

  constructor(private _router:Router, private _quienesSomoservice:PagesService, public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    var video, results;
    this._quienesSomoservice.getQuienesSomos()
    .subscribe((res:any) => {
      this.loader = false;
      this.quienesSomos_data = res;
      this.quienesSomos_data_url = res.acf.url_video;
      if(this.quienesSomos_data_url === null || this.quienesSomos_data_url === ''){
        return '';
      }
      results = this.quienesSomos_data_url.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? this.quienesSomos_data_url : results[1];
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
    });
  }
}
