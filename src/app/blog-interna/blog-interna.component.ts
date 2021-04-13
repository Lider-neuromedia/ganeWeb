import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../services/articles.service';

@Component({
  selector: 'app-blog-interna',
  templateUrl: './blog-interna.component.html',
  styleUrls: ['./blog-interna.component.css']
})
export class BlogInternaComponent implements OnInit {

  article_data:any = {};

  loader = true;

  constructor(private route: ActivatedRoute, private _articleservice:ArticlesService) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this._articleservice.getArticle(slug)
      .subscribe(res => {
        this.loader = false;
        this.article_data = res;
        for(let article of res){
          this.article_data = article;
        }
      })
  }

}
