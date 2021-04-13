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
  loader = true;

  constructor(private route: ActivatedRoute, private _campanaservice:CampanaService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this._campanaservice.getCampana(slug)
      .subscribe(res => {
        this.loader = false;
        this.campana_data = res;
        for(let campana of res){
          this.campana_data = campana;
        }
      })
  }

}
