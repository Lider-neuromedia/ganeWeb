import { Component, OnInit } from '@angular/core';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-periodico',
  templateUrl: './periodico.component.html',
  styleUrls: ['./periodico.component.css']
})
export class PeriodicoComponent implements OnInit {

  periodicos_data:any = {};

  constructor(private _periodico_service:PagesService){}

  ngOnInit(): void {
    this._periodico_service.getPeriodicos()
    .subscribe((res:any) => {
      this.periodicos_data = res;
    });
  }

}
