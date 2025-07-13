import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes)]
})
export class ContactModule {}
