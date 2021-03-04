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

  constructor(private route: ActivatedRoute, private _articleservice:ArticlesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._articleservice.getArticle(id)
      .subscribe(res => {
        this.article_data = res;
      })
  }

}
