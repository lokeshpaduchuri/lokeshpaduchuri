import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogModalComponent, BlogData } from '../blog-modal/blog-modal.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() title = '';
  @Input() excerpt = '';
  @Input() link = '';
  @Input() blog?: BlogData;

  constructor(private dialog: MatDialog) {}

  openModal(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    if (!this.blog) {
      return;
    }
    this.dialog.open(BlogModalComponent, { data: this.blog });
  }
}
