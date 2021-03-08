import { Component, OnInit } from '@angular/core';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-financieros',
  templateUrl: './financieros.component.html',
  styleUrls: ['./financieros.component.css']
})
export class FinancierosComponent implements OnInit {
  financieros_data:any = {};

  constructor(private _financieros_service:PagesService){}

  ngOnInit(): void {
    this._financieros_service.getFinancieros()
    .subscribe((res:any) => {
      this.financieros_data = res;
    });
  }

}
