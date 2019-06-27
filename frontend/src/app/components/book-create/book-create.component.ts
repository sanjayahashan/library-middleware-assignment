import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  private book: Book;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    
  }

  bookForm = new FormGroup({
    title: new FormControl(),
    // isbn: new FormControl(),
    author: new FormControl(),
  });

  onSubmit() {
    this.book = new Book(this.bookForm.value);
    this.bookService.add(this.book).subscribe(res =>
      console.log(res)
    );
  }
  
}
