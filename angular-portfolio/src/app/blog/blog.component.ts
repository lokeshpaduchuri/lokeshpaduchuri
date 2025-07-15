import { Component } from '@angular/core';

export interface Blog {
  title: string;
  summary: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs: Blog[] = [
    {
      title: 'Why I Love Angular',
      summary: 'A quick look at what makes Angular a great framework.',
      content:
        'Angular is built with scalability and structure in mind. It offers TypeScript, RxJS, and a powerful CLI...',
      date: '2025-07-14'
    },
    {
      title: 'SCSS Tips',
      summary: 'Organizing your styles with BEM and variables.',
      content:
        'Using BEM makes your SCSS more modular. Combine it with design tokens and variables for maximum clarity...',
      date: '2025-07-12'
    },
    {
      title: 'Deploying to the Cloud',
      summary: 'How to get your Angular app online quickly.',
      content:
        'You can deploy Angular apps via Vercel, Netlify, Firebase Hosting, or S3. Here\u2019s a guide to each option...',
      date: '2025-07-10'
    }
  ];
}
