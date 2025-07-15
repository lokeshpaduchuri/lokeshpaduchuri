import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.projects = p));
  }

  openSlideIn(project: Project) {
    this.selectedProject = project;
  }

  closePanel() {
    this.selectedProject = null;
  }
}
