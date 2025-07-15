import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

export interface Blog {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPosts().subscribe(b => (this.blogs = b));
  }
}
