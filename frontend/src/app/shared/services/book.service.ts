import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

var serverUrl = 'http://localhost:8080/library/book/';

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

  add(book: Book): Observable<Book> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<Book>(serverUrl, book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(serverUrl + book._id, book);
  }


}
