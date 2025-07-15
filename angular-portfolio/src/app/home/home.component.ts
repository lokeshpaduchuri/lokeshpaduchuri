import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Blog {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project?: Project;
  blog?: Blog;
  selectedProject: Project | null = null;
  selectedBlog: Blog | null = null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.project = p[0]));
    this.data.getPosts().subscribe(b => (this.blog = b[0]));
  }

  openSlideIn(project: Project) {
    this.selectedProject = project;
  }

  closePanel() {
    this.selectedProject = null;
  }

  openBlogSlide(blog: Blog) {
    this.selectedBlog = blog;
  }

  closeBlogSlide() {
    this.selectedBlog = null;
  }
}
