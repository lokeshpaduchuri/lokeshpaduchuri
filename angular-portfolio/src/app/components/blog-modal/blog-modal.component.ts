import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Blog } from '../../blog/blog.model';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent {
  @Input() blog!: Blog;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.onClose();
  }
}
