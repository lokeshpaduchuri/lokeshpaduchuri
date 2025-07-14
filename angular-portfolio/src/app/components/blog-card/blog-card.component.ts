import { Component, Input, HostListener } from '@angular/core';
import { Blog } from '../../blog/blog.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  /** Blog data for the card */
  @Input() blog!: Blog;

  /** Controls modal visibility */
  showModal = false;

  /** Open the modal */
  openModal(): void {
    this.showModal = true;
  }

  /** Close the modal */
  closeModal(): void {
    this.showModal = false;
  }

  /** Close modal when ESC is pressed */
  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.showModal) {
      this.closeModal();
    }
  }
}
