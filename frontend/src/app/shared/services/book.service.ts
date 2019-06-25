import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

var serverUrl = 'http://localhost:8080/library/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(serverUrl);
  }
}
