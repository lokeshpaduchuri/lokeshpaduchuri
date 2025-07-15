import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent, ProjectData } from '../project-modal/project-modal.component';

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

  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  onReadMore(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const data: ProjectData = { title: this.title, description: this.description, image: this.image };
    this.dialog.open(ProjectModalComponent, {
      data,
      panelClass: 'slide-in-panel',
      disableClose: false,
      autoFocus: false,
      maxWidth: '100vw',
      height: '100vh'
    });
  }

  constructor(private dialog: MatDialog) {}
}
