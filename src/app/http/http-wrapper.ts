import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {ApiUrl} from './api-url';

export class HttpWrapper {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public post(url: ApiUrl, body: {}) {
    this.http.post(url.endpoint, body, {headers: this.prepareHeaders()});
  }

  public get(url: ApiUrl, params: HttpParams) {
    return this.http.get(url.endpoint, {
      headers: this.prepareHeaders(),
      params: params,
    });
  }

  private prepareHeaders(): HttpHeaders {
    const token = this.authService.getAuthorizationToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
  }
}
