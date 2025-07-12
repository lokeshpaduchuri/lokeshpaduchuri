import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() title = 'Blog Title';
  @Input() excerpt = 'Short summary of the post.';
  @Input() link = '/blog/post-1';
}
