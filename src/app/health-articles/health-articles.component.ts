import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-health-articles',
  templateUrl: './health-articles.component.html',
  styleUrls: ['./health-articles.component.scss']
})
export class HealthArticlesComponent implements OnInit {

  public groupTitle = 3;
  public healthArt: ArticleDetails;

  constructor(
    private _getArtServise: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArtServise.getSpecyficCategory('health')
      .subscribe((article) => {
        this.healthArt = article.articles;
      });
  }

}
