import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Specimen } from 'src/app/shared/models/specimen';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BorrowserviceService } from 'src/app/shared/services/borrowservice.service';
import { Borrowing } from 'src/app/shared/models/borrowing';


@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {

  private book: Book;
  private borrow: Borrowing;
  dataSource: MatTableDataSource<Borrowing>;
  displayedColumns: string[] = ['id', 'specimen', 'user', 'returnDate', 'expire'];

  @ViewChild(MatTable, {static:true}) table: MatTable<Specimen>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private borrowingService: BorrowserviceService
  ) { }

  ngOnInit() {
    this.borrowingService.all().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
