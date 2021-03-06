import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Borrowing } from '../models/borrowing';
import { Observable } from 'rxjs';
var serverUrl = 'http://localhost:8080/library/borrowings/';

@Injectable({
  providedIn: 'root'
})
export class BorrowserviceService {

  constructor(private http: HttpClient) { }

  public addBorrowing(borrowing:Borrowing){
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<Borrowing>(serverUrl, borrowing);
  }

  all(): Observable<Borrowing[]> {
    return this.http.get<Borrowing[]>(serverUrl);
  }
}
