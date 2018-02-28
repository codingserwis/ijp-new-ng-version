import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-default',
  templateUrl: './article-default.component.html',
  styleUrls: ['./article-default.component.scss']
})

export class ArticleDefaultComponent implements OnInit {

@Input('article') article;

  constructor() { }

  ngOnInit() {
  }

}
