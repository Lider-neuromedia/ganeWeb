import { Component, OnInit } from '@angular/core';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
})
export class PrivacidadComponent implements OnInit {
  privacidad_data:any = {};
  loader = true;

  constructor(private _privacidad_service:PagesService){}

  ngOnInit(): void {
    this._privacidad_service.getPrivacidad()
    .subscribe((res:any) => {
      this.privacidad_data = res;
      this.loader = false;
    });
  }

}
