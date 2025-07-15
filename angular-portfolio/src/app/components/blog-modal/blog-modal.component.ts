import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface BlogData {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link?: string;
}

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BlogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogData
  ) {}
}
