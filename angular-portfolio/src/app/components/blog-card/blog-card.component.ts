import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() readMore = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  openModal(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    if (!this.blog) {
      return;
    }
    this.dialog.open(BlogModalComponent, {
      data: this.blog,
      panelClass: 'custom-dialog-panel',
      disableClose: false,
      autoFocus: false,
      maxWidth: '90vw'
    });
  }

  onCardClick() {
    if (this.readMore.observers.length) {
      return;
    }
    this.openModal();
  }

  onReadMore(event: MouseEvent) {
    event.stopPropagation();
    if (this.readMore.observers.length) {
      this.readMore.emit();
    } else {
      this.openModal();
    }
  }
}
