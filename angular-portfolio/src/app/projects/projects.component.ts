import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack?: string[];
  liveLink?: string;
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  panelVisible = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.projects = p));
  }

  openSlideIn(project: Project) {
    this.panelVisible = false;
    this.selectedProject = project;
    // allow panel to render off-screen before sliding in
    setTimeout(() => (this.panelVisible = true));
  }

  closePanel() {
    this.panelVisible = false;
    // wait for animation to finish before removing element
    setTimeout(() => (this.selectedProject = null), 300);
  }
}
