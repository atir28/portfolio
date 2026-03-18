import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';

interface Company {
  name: string;
  logo: string;
  linkedIn: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  Math = Math;
  
  projects = this.projectService.projects;

  collaborationCompanies = signal<Company[]>([
    {
      name: 'Google',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
      linkedIn: 'https://www.linkedin.com/company/google'
    },
    {
      name: 'Microsoft',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
      linkedIn: 'https://www.linkedin.com/company/microsoft'
    },
    {
      name: 'Netflix',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
      linkedIn: 'https://www.linkedin.com/company/netflix'
    },
    {
      name: 'Amazon',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732160.png',
      linkedIn: 'https://www.linkedin.com/company/amazon'
    }
  ]);

  pageSize = 6;
  currentPage = signal(1);

  totalPages = computed(() => Math.ceil(this.projects().length / this.pageSize));

  paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.projects().slice(start, end);
  });

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
