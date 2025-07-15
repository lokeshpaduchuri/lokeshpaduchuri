import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { BlogData } from '../components/blog-modal/blog-modal.component';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

type Post = BlogData;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project?: Project;
  post?: Post;
  selectedProject: Project | null = null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.project = p[0]));
    this.data.getPosts().subscribe(b => (this.post = b[0]));
  }

  openSlideIn(project: Project) {
    this.selectedProject = project;
  }

  closePanel() {
    this.selectedProject = null;
  }
}
