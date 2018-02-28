import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { BizArticlesComponent } from './biz-articles/biz-articles.component';
import { EntertainmentArticlesComponent } from './entertainment-articles/entertainment-articles.component';
import { HealthArticlesComponent } from './health-articles/health-articles.component';
import { ScienceArticlesComponent } from './science-articles/science-articles.component';
import { SportArticlesComponent } from './sport-articles/sport-articles.component';
import { TechnologyArticlesComponent } from './technology-articles/technology-articles.component';

const routes: Routes = [
    {
        path: 'start',
        component: ArticlesComponent
    },
    {
        path: 'biz',
        component: BizArticlesComponent
    },
    {
        path: 'entertainment',
        component: EntertainmentArticlesComponent
    },
    {
        path: 'health',
        component: HealthArticlesComponent
    },
    {
        path: 'science',
        component: ScienceArticlesComponent
    },
    {
        path: 'sport',
        component: SportArticlesComponent
    },
    {
        path: 'technology',
        component: TechnologyArticlesComponent
    },
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'start'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class ArticleRoutingModule {}
