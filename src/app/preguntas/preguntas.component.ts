import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  titulo_data: any = {};
  subtitulo_data: any = {};
  texto_general_data: any = {};
  horario_atencion_imagen_data: any;
  texto_descriptivo_seccion_2_data:any = {};
  imagen_data: any[] =[];
  video_gane_url:any = {};
  urlSafe: SafeResourceUrl;

  constructor(private httpClient:HttpClient, private _preguntas:PagesService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    var video, results;
    this._preguntas.getPreguntasFrecuentes()
      .subscribe((res:any) => {
        this.titulo_data = res.acf.titulo;
        this.subtitulo_data = res.acf.subtitulo;
        this.texto_general_data = res.acf.texto_general;
        this.horario_atencion_imagen_data = res.acf.horario_atencion_imagen;
        this.video_gane_url = res.acf.video_gane;
        this.texto_descriptivo_seccion_2_data = res.acf.texto_descriptivo_seccion_2;
        this.imagen_data = res.acf.imagen;
        

        if(this.video_gane_url === null || this.video_gane_url === ''){
          return '';
        }
        results = this.video_gane_url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? this.video_gane_url : results[1];
        this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video);
      });
  }

}
