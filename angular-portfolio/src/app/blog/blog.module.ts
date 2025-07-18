import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent }
];

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class BlogModule {}
