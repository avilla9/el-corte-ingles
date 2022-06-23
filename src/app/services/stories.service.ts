import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  apiUrl = "http://127.0.0.1:8000/api/";

  constructor(
    private http: HttpClient,
  ) { }

  getStories() {
    return this.http.get(this.apiUrl + 'stories');
  }
}
