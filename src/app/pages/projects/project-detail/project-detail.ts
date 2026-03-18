import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService, Project } from '../../../core/services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  
  project = signal<Project | undefined>(undefined);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.project.set(this.projectService.projects().find(p => p.id === id || p.slug === id));
      }
    });
  }
}
