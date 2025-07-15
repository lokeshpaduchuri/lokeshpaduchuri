import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectCardComponent {
  @Input() title = 'My Web App';
  @Input() description = 'Project description';
  @Input() image = 'assets/placeholder.svg';
  @Input() link = '/projects/project-1';
  @Input() techStack?: string[];
  @Input() liveLink?: string;

  /** True when this card's slide-in panel should be visible */
  @Input() selected = false;

  /** Notify parent when user requests to open the panel */
  @Output() readMore = new EventEmitter<void>();
  /** Notify parent when the slide-in panel should close */
  @Output() close = new EventEmitter<void>();

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  onReadMore(event: Event) {
    event.preventDefault();
    this.readMore.emit();
  }

  onClose(event: Event) {
    event.stopPropagation();
    this.close.emit();
  }
}
