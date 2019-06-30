import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const serverUrl = "http://localhost:8080/users/";

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(
    private http: HttpClient,
  ) { }

  add(user: User) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<User>(serverUrl + "register/", user);
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(serverUrl);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(serverUrl + id);
  }
}
