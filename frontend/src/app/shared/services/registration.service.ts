import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const serverUrl = "localhost:8080/users/";

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
    return this.http.post<User>(serverUrl + "register", user);
  }
}
