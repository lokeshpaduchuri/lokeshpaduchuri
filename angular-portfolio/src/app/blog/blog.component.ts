import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Post {
  title: string;
  excerpt: string;
  link: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPosts().subscribe(p => (this.posts = p));
  }
}
