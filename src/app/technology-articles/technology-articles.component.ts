import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-technology-articles',
  templateUrl: './technology-articles.component.html',
  styleUrls: ['./technology-articles.component.scss']
})
export class TechnologyArticlesComponent implements OnInit {

  public groupTitle = 6;
  public techArt: ArticleDetails;

  constructor(
    private _getArtService: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArtService.getSpecyficCategory('technology')
      .subscribe((articles) => {
        this.techArt = articles.articles;
      });
  }

}
