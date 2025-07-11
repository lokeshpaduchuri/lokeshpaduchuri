import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() title = 'Project Title';
  @Input() description = 'Project description';
  @Input() image = 'assets/project.png';
  @Input() link = '/projects/project-1';
}
