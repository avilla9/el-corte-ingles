import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostAccessService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }
  sendAccess(data): Observable<any> {
    // console.log(data);
    return this.http.post(
      this.apiUrl + '/posts/validate',
      {
        user_id: parseInt(localStorage.getItem('user_id')),
        "article_id": data.id
      }
    )
  }
}
