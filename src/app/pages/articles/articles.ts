import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService, Article } from '../../core/services/article.service';

@Component({
  selector: 'app-articles',
  imports: [RouterLink],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articleService = inject(ArticleService);
  articles: Article[] = this.articleService.getArticles();
}
