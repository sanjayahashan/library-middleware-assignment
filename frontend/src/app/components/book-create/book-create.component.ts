import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    
  }

  bookForm = new FormGroup({
    title: new FormControl(),
    isbn: new FormControl(),
    author: new FormControl(),
  });

  
}
