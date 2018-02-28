import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ArticleList } from './article';

@Injectable()
export class NewsServiceService {

  private API_KEY = '64b0f57dd2e44132b7f1f45b095747ec';

  constructor(
    private _http: HttpClient
  ) { }

  getAllHeadlines(): Observable<ArticleList> {
    return this._http.get<ArticleList>(`https://newsapi.org/v2/top-headlines?country=pl&apiKey=${this.API_KEY}`);
  }

  getSpecyficCategory(category: string): Observable<ArticleList> {
    return this._http.get<ArticleList>(`https://newsapi.org/v2/top-headlines?country=pl&category=${category}&apiKey=${this.API_KEY}`);
  }


}
