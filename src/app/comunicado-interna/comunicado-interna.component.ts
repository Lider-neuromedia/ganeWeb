import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'app-comunicado-interna',
  templateUrl: './comunicado-interna.component.html',
  styleUrls: ['./comunicado-interna.component.css']
})
export class ComunicadoInternaComponent implements OnInit {

  comunicado_data:any = {};

  constructor(private route: ActivatedRoute, private _comunicadoservice:PostsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._comunicadoservice.getComunicado(id)
      .subscribe(res => {
        this.comunicado_data = res;
      })
  }

}
