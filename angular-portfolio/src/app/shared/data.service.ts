import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../blog/blog.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('assets/projects.json');
  }

  getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>('assets/blog.json');
  }
}
