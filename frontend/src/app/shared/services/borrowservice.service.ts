import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Borrowing } from '../models/borrowing';
var serverUrl = 'http://localhost:8080/library/Borrowings';

@Injectable({
  providedIn: 'root'
})
export class BorrowserviceService {

  constructor(private http: HttpClient) { }

  addBorrowing(borrowing:Borrowing){
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<Borrowing>(serverUrl, borrowing);
  }
}
