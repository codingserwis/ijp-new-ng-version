import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../article';

@Component({
  selector: 'app-science-articles',
  templateUrl: './science-articles.component.html',
  styleUrls: ['./science-articles.component.scss']
})
export class ScienceArticlesComponent implements OnInit {

  public groupTitle = 4;
  public scienceArt: ArticleDetails;

  constructor(
    private _getArtService: NewsServiceService
  ) { }

  ngOnInit() {
    this._getArtService.getSpecyficCategory('science')
      .subscribe((articles) => {
        this.scienceArt = articles.articles;
      });
  }

}
