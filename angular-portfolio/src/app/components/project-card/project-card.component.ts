import { Component, Input } from '@angular/core';
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

  panelOpen = false;
  panelVisible = false;

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  onReadMore(event: Event) {
    event.preventDefault();
    this.panelOpen = true;
    setTimeout(() => (this.panelVisible = true));
  }

  closePanel() {
    this.panelVisible = false;
    setTimeout(() => (this.panelOpen = false), 300);
  }
}
