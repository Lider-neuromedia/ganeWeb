import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampanaService } from './../services/campana.service';

@Component({
  selector: 'app-campana',
  templateUrl: './campana.component.html',
  styleUrls: ['./campana.component.css']
})
export class CampanaComponent implements OnInit {

  campana_data:any = {};

  constructor(private route: ActivatedRoute, private _campanaservice:CampanaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._campanaservice.getCampana(id)
      .subscribe(res => {
        this.campana_data = res;
      })
  }

}
