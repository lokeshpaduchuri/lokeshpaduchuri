import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  constructor(private renderer: Renderer2) {}

  toggle(): void {
    const hasDark = document.body.classList.contains('dark');
    if (hasDark) {
      this.renderer.removeClass(document.body, 'dark');
    } else {
      this.renderer.addClass(document.body, 'dark');
    }
  }
}
