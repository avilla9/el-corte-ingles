import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variables
  authUrl = 'http://127.0.0.1:8000/oauth/token';
  apiUrl = 'http://127.0.0.1:8000/api';
  options: any;
  /**
   * Constructor
   * @param http The http client object
   */
  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })
    };
  }
  /**
   * Get an access token
   * @param e The email address
   * @param p The password string
   */
  login(e: string, p: string) {
    console.log('login with', e, p);
    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'c9BYBJ1tEM1rn28nNMWxcWl6f6PHfc7Z29tOKHYi',
      username: e,
      password: p,
      scope: ''
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */
  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    console.log(this.options);
    return this.http.get(this.apiUrl + '/token/revoke', this.options);
  }

  userData(id) {
    return this.http.post(this.apiUrl + '/users/data', {
      id: id,
    }, this.options);
  }
}