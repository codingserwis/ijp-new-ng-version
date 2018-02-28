import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-entertainment-articles',
  templateUrl: './entertainment-articles.component.html',
  styleUrls: ['./entertainment-articles.component.scss']
})
export class EntertainmentArticlesComponent implements OnInit {

  public groupTitle = 2;
  public entertainmentArt: ArticleDetails;

  constructor(
    private _getArticleService: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArticleService.getSpecyficCategory('entertainment')
      .subscribe((articles) => {
        this.entertainmentArt = articles.articles;
      });
  }

}
