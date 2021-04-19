import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../services/articles.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-blog-interna',
  templateUrl: './blog-interna.component.html',
  styleUrls: ['./blog-interna.component.css']
})
export class BlogInternaComponent implements OnInit {

  article_data:any = {};
  article_data_acf:any = {};
  articles_data:any[] = [];

  loader = true;

  constructor(private _router:Router, private route: ActivatedRoute, private _articleervice:ArticlesService, private _articleservice:ArticlesService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this._articleervice.getArticle(slug)
      .subscribe(res => {
        this.loader = false;
        this.article_data = res;
        for(let article of res){
          this.article_data = article;
          this.article_data_acf = article.acf;
        }
      })
    this._articleservice.getArticles()
    .subscribe((res:any) => {
        this.articles_data = res;
        this.loader = false;
    });  
  }

  verArticle(slug:string){
    this._router.navigateByUrl('/articulo', {skipLocationChange: true}).then(()=>
    this._router.navigate(['/articulo', slug]))
  }

}
