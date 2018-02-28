export interface SourceDetails {
    id: null;
    name: string;
}

export interface ArticleDetails {
    source: SourceDetails;
    author: null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export interface ArticleList {
    status: string;
    totalResults: number;
    articles: ArticleDetails;
}
