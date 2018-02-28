import { Component, OnInit, Input } from '@angular/core';
import { ArticleGroups } from '../article-groups.enum';

@Component({
  selector: 'app-group-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class ArticleTitleComponent implements OnInit {

  @Input('title') title;

  public sectionTitle: string;

  constructor() { }

  ngOnInit() {
    this.setGroupTitle(this.title);
  }

  public setGroupTitle(title: number): void {
    switch (title) {
      case ArticleGroups.TopNews:
        this.sectionTitle = 'Top news z Polski';
      break;
      case ArticleGroups.Business:
        this.sectionTitle = 'Najnowsze wiadomości biznesowe z Polski';
      break;
      case ArticleGroups.Entertainment:
        this.sectionTitle = 'Najnowsze wiadomości kulturalne z Polski';
      break;
      case ArticleGroups.Health:
        this.sectionTitle = 'Najnowsze wiadomości zdrowotne z Polski';
      break;
      case ArticleGroups.Science:
        this.sectionTitle = 'Najnowsze wiadomości naukowe z Polski';
      break;
      case ArticleGroups.Sports:
        this.sectionTitle = 'Najnowsze wiadomości sportowe z Polski';
      break;
      case ArticleGroups.Technology:
        this.sectionTitle = 'Najnowsze wiadomości technologiczne z Polski';
      break;
      default:
        this.sectionTitle = 'Najnowsze wiadomości z Polski';
    }
  }

}
