import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles_data:any[] = [];
  loader = true;
  subtitulo_data:any;
  
  constructor(private _router:Router, private _articlesService:ArticlesService, private _blog:PagesService) { 
  }
  
  ngOnInit(): void {
    this._articlesService.getArticles()
    .subscribe((res:any) => {
        this.articles_data = res;
        this.loader = false;
    });
    this._blog.getBlog()
    .subscribe((res:any) => {
      this.loader = false;
      this.subtitulo_data = res.acf.subtitulo;
    });
  }

  verArticle(slug:string){
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(['/articulo', slug]);
  }
}
