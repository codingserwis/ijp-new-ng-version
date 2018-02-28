import { Component, OnInit } from '@angular/core';

import { NewsServiceService } from './../news-service.service';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-biz-articles',
  templateUrl: './biz-articles.component.html',
  styleUrls: ['./biz-articles.component.scss']
})
export class BizArticlesComponent implements OnInit {

  public bizArticles: ArticleDetails;
  public groupTitle = 1;

  constructor(
    private _getArticles: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArticles.getSpecyficCategory('business')
      .subscribe((articles) => {
        this.bizArticles = articles.articles;
      });
  }

}
