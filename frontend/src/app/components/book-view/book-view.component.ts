import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Specimen } from 'src/app/shared/models/specimen';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  private book: Book;
  dataSource: MatTableDataSource<Specimen>;
  displayedColumns: string[] = ['id', 'bookingTime', 'publishment', 'actions'];

  @ViewChild(MatTable, {static:true}) table: MatTable<Specimen>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.get(id).subscribe(res => {
      this.book = res;
      this.dataSource = new MatTableDataSource(this.book.specimens);
      console.log(this.book);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
