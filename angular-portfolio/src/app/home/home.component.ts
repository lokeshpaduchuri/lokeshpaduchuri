import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Post {
  title: string;
  excerpt: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  project?: Project;
  post?: Post;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getProjects().subscribe(p => (this.project = p[0]));
    this.data.getPosts().subscribe(b => (this.post = b[0]));
  }
}
