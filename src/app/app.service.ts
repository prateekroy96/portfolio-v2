import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl = '/';
    } else {
      this.baseUrl = 'http://localhost:4000/';
    }
  }
  currentSection: BehaviorSubject<string> = new BehaviorSubject<string>('home');
  scrollTo(id) {
    document.querySelector('#' + id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  onSectionChange(sectionId: string) {
    this.currentSection.next(sectionId);
  }
  mailApi(data) {
    return this.http.post(this.baseUrl + 'api/mail', data);
  }
}
