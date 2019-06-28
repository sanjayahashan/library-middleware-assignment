import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  private book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      this.bookService.get(id).subscribe(res => {
        this.bookForm.patchValue(res);
      });
    }
  }

  bookForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    // isbn: new FormControl(),
    author: new FormControl(),
  });

  onSubmit() {
    if(!this.bookForm.get('id').value) {
      this.book = new Book(this.bookForm.value);
      this.bookService.add(this.book).subscribe(res =>
        console.log(res)
      );
      this.bookForm.reset();
    }
    else {
      this.book = this.bookForm.value;
      this.bookService.update(this.book).subscribe(res => {
        console.log(res);
      })
    }
  }
  
}
