import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: BlogsComponent }];

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class BlogsModule {}
