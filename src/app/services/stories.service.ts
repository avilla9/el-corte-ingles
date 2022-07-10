import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  authUrl = environment.authUrl;
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getStories() {
    return this.http.get(this.apiUrl + '/stories');
  }
}
