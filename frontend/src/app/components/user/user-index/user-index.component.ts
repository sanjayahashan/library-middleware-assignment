import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { User } from 'src/app/shared/models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  expandedElement: User | null;

  @ViewChild(MatTable, {static:true}) table: MatTable<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private userService: RegistrationService
  ) { }

  ngOnInit() {
    this.userService.all().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
