import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles/article.service';
import { Article } from '../../../Article';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    articles: Article[];
    tite: string;
    author: string;
    body: string;

  constructor(private articleService:ArticleService) {
    this.articleService.getArticles()
    .subscribe(articles => {
      this.articles = articles;
      // console.log(articles);
    })
   }

  ngOnInit() {
  }

}
