import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {
  recargas_data:any = {};
  loader = true;
  totalCount = 7;

  constructor(private _router:Router, private _pagesservice:PagesService) { }

  ngOnInit(): void {
    this._pagesservice.getRecargas()
    .subscribe((res:any) => {
      this.loader = false;
      this.recargas_data = res;
    });
  }

}
