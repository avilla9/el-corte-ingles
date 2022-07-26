import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getStories() {
    return this.http.get(this.apiUrl + '/stories');
  }
}
