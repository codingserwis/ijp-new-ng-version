import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ArticleDetails } from '../article';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: ArticleDetails;
  public groupTitle = 0;

  constructor(
    private _getArticles: NewsServiceService
  ) { }

  ngOnInit() {
    this.getListoOfArticles();
  }

  private getListoOfArticles() {
    this._getArticles.getAllHeadlines()
      .subscribe((articles) => {
        this.articles = articles.articles;
      });
  }

}
