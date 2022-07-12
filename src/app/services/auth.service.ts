import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variables
  authUrl = environment.authUrl;
  apiUrl = environment.apiUrl;
  client = environment.client_secret;
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
      client_secret: this.client,
      username: e,
      password: p,
      scope: ''
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */
  logout(id) {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    console.log(this.options);
    return this.http.post(
      this.apiUrl + '/token/revoke',
      { id: id },
      this.options
    );
  }

  userData(id) {
    return this.http.post(this.apiUrl + '/users/data', {
      id: id,
    }, this.options);
  }
}