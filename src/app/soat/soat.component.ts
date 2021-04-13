import { Component, OnInit } from '@angular/core';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css']
})
export class SoatComponent implements OnInit {
  soat_data:any = {};
  loader = true;

  constructor(private _soatservice:PagesService){}

  ngOnInit(): void {
    this._soatservice.getSoat()
    .subscribe((res:any) => {
      this.loader = false;
      this.soat_data = res;
    });
  }

}
