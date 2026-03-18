import { Injectable, signal } from '@angular/core';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  company: string;
  companyLink?: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  longDescription?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects = signal<Project[]>([
    {
      id: '1',
      slug: 'activity-tracker',
      title: 'Activity Tracker App',
      description: 'A fully-featured activity tracking web application with offline synchronization capabilities.',
      longDescription: 'This project involved building a robust data synchronization engine using SignalR and local storage. It handles complex offline scenarios and ensures real-time updates across multiple devices.',
      technologies: ['Angular', 'NgRx', 'SignalR'],
      company: 'TechFlow Systems',
      gradient: 'from-primary to-secondary',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '2',
      slug: 'event-staff-management',
      title: 'Event Staff Management',
      description: 'A comprehensive management system for event staffing and payroll processing.',
      longDescription: 'A complex ERP-like system for event organizers to manage thousands of staff members, their schedules, and payroll. Built with an Angular frontend and Django backend.',
      technologies: ['Angular', 'Django', 'PostgreSQL'],
      company: 'EventLogistics Inc.',
      gradient: 'from-secondary to-accent',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '3',
      slug: 'saas-ecommerce',
      title: 'SaaS Ecommerce',
      description: 'A multi-tenant e-commerce platform with microservices architecture.',
      longDescription: 'Designed and implemented a scalable e-commerce infrastructure supporting multiple vendors. Each service is independent, communicating via message queues.',
      technologies: ['Angular', 'Node.js', 'Microservices'],
      company: 'CloudCommerce Solutions',
      gradient: 'from-accent to-primary',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '4',
      slug: 'food-delivery',
      title: 'Food Delivery App',
      description: 'A modern food ordering and delivery web application with NgRx.',
      longDescription: 'High-performance web app with real-time tracking, interactive maps, and seamless checkout experience. Uses NgRx for predictable state management.',
      technologies: ['Angular', 'Node.js', 'Express'],
      company: 'QuickBite Tech',
      gradient: 'from-primary to-secondary',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '5',
      slug: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics dashboard with AI-driven performance insights.',
      longDescription: 'Integrates machine learning models to predict business trends. Features custom visualization components for complex data sets.',
      technologies: ['Angular', 'Python', 'TensorFlow'],
      company: 'DataMind AI',
      gradient: 'from-secondary to-accent',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '6',
      slug: 'real-estate-portal',
      title: 'Real Estate Portal',
      description: 'High-performance real estate portal with advanced search and interactive mapping.',
      longDescription: 'Optimized for SEO and speed, this portal handles millions of listings with Elasticsearch. Integrated with Google Maps for location-based search.',
      technologies: ['Angular', 'Elasticsearch', 'Google Maps API'],
      company: 'UrbanNest Realty',
      gradient: 'from-accent to-primary',
      githubUrl: '#',
      liveUrl: '#'
    }
  ]);

  getProjectById(id: string) {
    return this.projects().find(p => p.id === id);
  }
}
