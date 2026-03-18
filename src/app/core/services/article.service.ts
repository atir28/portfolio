import { Injectable } from '@angular/core';

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  readTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      slug: 'angular-standalone-components',
      title: 'Angular Standalone Components Architecture',
      description: 'Learn how standalone components simplify Angular applications by reducing boilerplate and improving tooling.',
      publishDate: 'Oct 12, 2025',
      tags: ['Angular', 'Architecture', 'Frontend'],
      readTime: '5 min read'
    },
    {
      slug: 'ngrx-offline-sync',
      title: 'Angular NgRx Offline Synchronization',
      description: 'A deep dive into managing offline application state using NgRx and synchronizing with the backend when online.',
      publishDate: 'Sep 05, 2025',
      tags: ['Angular', 'NgRx', 'RxJS', 'Offline'],
      readTime: '8 min read'
    },
    {
      slug: 'building-saas-applications',
      title: 'Building Scalable SaaS Applications',
      description: 'Architecting frontend systems to handle multi-tenant data, dynamic themes, and complex role-based access control.',
      publishDate: 'Aug 20, 2025',
      tags: ['SaaS', 'Architecture', 'Web'],
      readTime: '10 min read'
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleBySlug(slug: string): Article | undefined {
    return this.articles.find(a => a.slug === slug);
  }
}
