import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(c => c.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(c => c.About) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(c => c.Projects) },
  { path: 'articles', loadComponent: () => import('./pages/articles/articles').then(c => c.Articles) },
  { path: 'articles/:slug', loadComponent: () => import('./features/article-detail/article-detail').then(c => c.ArticleDetail) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then(c => c.Resume) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(c => c.Contact) },
  { path: '**', redirectTo: '' }
];
