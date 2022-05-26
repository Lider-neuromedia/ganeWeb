import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampanaService } from './../services/campana.service';
import Swal from 'sweetalert2';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-campana',
  templateUrl: './campana.component.html',
  styleUrls: ['./campana.component.css'],
})
export class CampanaComponent implements OnInit {
  campana_data: any = {};
  campanas_data: any[] = [];
  loader = true;
  subtitulo_data: any;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _campanaservice: CampanaService,
    private _campana: PagesService
  ) {}

  ngOnInit(): void {
    this._campanaservice.getCampanas().subscribe((res: any) => {
      this.loader = false;
      this.campanas_data = res;
    });
    this._campana.getCampana().subscribe((res: any) => {
      this.loader = false;
      this.subtitulo_data = res.acf.subtitulo;
    });
    this.route.params.subscribe((param) => {
      console.log(param.slug);
      const slug = param.slug;
      this._campanaservice.getCampana(slug).subscribe((res) => {
        this.loader = false;
        this.campana_data = res;
        for (let campana of res) {
          this.campana_data = campana;
        }
      });
    });
  }
  verCampana(slug: string) {
    this._router.navigate(['/campana', slug]);
  }
  errorCampana() {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'La campaña seleccionada ya expiró',
      confirmButtonColor: '#EAB73B',
      confirmButtonText: 'Cerrar',
    });
  }
}
