import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  doLike(article) {
    return this.http.post(this.apiUrl + '/like', {
      post_id: article.id,
      user_id: parseInt(localStorage.getItem('user_id'))
    });
  }
}
