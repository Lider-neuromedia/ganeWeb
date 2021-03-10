import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../services/articles.service';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles_data:any[] = [];
  
  constructor(private _router:Router, private _articlesService:ArticlesService) { 
  }
  
  ngOnInit(): void {
    this._articlesService.getArticles()
    .subscribe((res:any) => {
      this.articles_data = res;
    });
  }

  verArticle(slug:string){
    this._router.navigate(['/articulo', slug]);
  }
}
