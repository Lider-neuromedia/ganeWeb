import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'app-comunicado-interna',
  templateUrl: './comunicado-interna.component.html',
  styleUrls: ['./comunicado-interna.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ComunicadoInternaComponent implements OnInit {

  comunicado_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _comunicadoservice:PostsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('slug');
    this._comunicadoservice.getComunicado(id)
      .subscribe(res => {
        this.comunicado_data = res;
        for(let comunicado of res){
          this.loader = false;
          this.comunicado_data = comunicado;
        }
      })
  }

}
