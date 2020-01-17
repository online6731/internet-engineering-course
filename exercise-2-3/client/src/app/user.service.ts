import { Injectable } from "@angular/core";
import { User } from "./User";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(username, password): Observable<response> {
    return this.http.post<response>("http://localhost:3000/login", {
      username,
      password
    });
  }
}

interface response {
  response: string;
}
