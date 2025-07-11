import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { ThemeToggleComponent } from './layout/theme-toggle/theme-toggle.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    TechStackComponent,
    ProjectCardComponent,
    BlogCardComponent,
    ContactCtaComponent,
    ThemeToggleComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
