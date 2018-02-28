import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-sport-articles',
  templateUrl: './sport-articles.component.html',
  styleUrls: ['./sport-articles.component.scss']
})
export class SportArticlesComponent implements OnInit {

  public groupTitle = 5;
  public sportArt: ArticleDetails;

  constructor(
    private _getArtService: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArtService.getSpecyficCategory('sport')
      .subscribe((articles) => {
        this.sportArt = articles.articles;
      });
  }

}
