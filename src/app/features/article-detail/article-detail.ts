import { Component, Input, OnInit, inject } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ArticleService, Article } from '../../core/services/article.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  imports: [MarkdownModule, RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css',
})
export class ArticleDetail implements OnInit {
  @Input() slug!: string;
  article: Article | undefined;
  articlePath: string = '';

  private articleService = inject(ArticleService);

  ngOnInit() {
    this.article = this.articleService.getArticleBySlug(this.slug);
    if (this.article) {
      this.articlePath = `/assets/articles/${this.slug}.md`;
    }
  }
}
