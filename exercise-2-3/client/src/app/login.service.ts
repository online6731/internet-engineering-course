import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password): Observable<response> {
    return this.http.post<response>('http://net-server.apps.whoknows.ir/login', { username, password });
  }
}

interface user {
  username;
  password;
}

interface response {
  data;
}
