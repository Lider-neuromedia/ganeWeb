import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampanaService } from './../services/campana.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {

  campanas_data:any[] = [];

  constructor(private _router:Router, private _campanaservice:CampanaService) { }

  ngOnInit(): void {
    this._campanaservice.getCampanas()
    .subscribe((res:any) => {
      this.campanas_data = res;
    });
  }

  verCampana(slug:string){
    this._router.navigate(['/campana', slug]);
  }

}
