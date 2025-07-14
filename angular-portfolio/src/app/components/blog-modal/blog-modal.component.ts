import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface BlogData {
  title: string;
  summary: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html'
})
export class BlogModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BlogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogData
  ) {}
}
