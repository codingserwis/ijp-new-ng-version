import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsServiceService } from './news-service.service';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleRoutingModule } from './article.routing';
import { BizArticlesComponent } from './biz-articles/biz-articles.component';
import { ArticleDefaultComponent } from './shared/article-default.component';
import { ArticleTitleComponent } from './shared/title.component';
import { HealthArticlesComponent } from './health-articles/health-articles.component';
import { ScienceArticlesComponent } from './science-articles/science-articles.component';
import { SportArticlesComponent } from './sport-articles/sport-articles.component';
import { TechnologyArticlesComponent } from './technology-articles/technology-articles.component';
import { EntertainmentArticlesComponent } from './entertainment-articles/entertainment-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArticlesComponent,
    BizArticlesComponent,
    ArticleDefaultComponent,
    ArticleTitleComponent,
    HealthArticlesComponent,
    ScienceArticlesComponent,
    SportArticlesComponent,
    TechnologyArticlesComponent,
    EntertainmentArticlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleRoutingModule
  ],
  providers: [
    NewsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
