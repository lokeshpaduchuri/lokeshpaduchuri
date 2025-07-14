import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HeroBannerComponent } from '../components/hero-banner/hero-banner.component';
import { TechStackComponent } from '../components/tech-stack/tech-stack.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';
import { BlogModalComponent } from '../components/blog-modal/blog-modal.component';
import { ContactCtaComponent } from '../components/contact-cta/contact-cta.component';
import { ThemeToggleComponent } from '../layout/theme-toggle/theme-toggle.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@NgModule({
  declarations: [
    HeroBannerComponent,
    TechStackComponent,
    ProjectCardComponent,
    BlogCardComponent,
    BlogModalComponent,
    ContactCtaComponent,
    ThemeToggleComponent,
    NavbarComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeroBannerComponent,
    TechStackComponent,
    ProjectCardComponent,
    BlogCardComponent,
    BlogModalComponent,
    ContactCtaComponent,
    ThemeToggleComponent,
    NavbarComponent,
    RouterModule,
  ]
})
export class SharedModule {}
