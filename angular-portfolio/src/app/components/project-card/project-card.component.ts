import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title = 'My Web App';
  @Input() description = 'Project description';
  @Input() image = 'assets/placeholder.svg';
  @Input() link = '/projects/project-1';
}
