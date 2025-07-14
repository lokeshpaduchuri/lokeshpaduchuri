import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('assets/projects.json');
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('assets/blog.json');
  }
}
