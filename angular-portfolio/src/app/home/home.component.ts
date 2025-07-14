import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Blog } from '../blog/blog.model';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project?: Project;
  post?: Blog;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.project = p[0]));
    this.data.getPosts().subscribe(b => (this.post = b[0]));
  }
}
