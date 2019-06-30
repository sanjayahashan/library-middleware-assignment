import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Borrowing } from 'src/app/shared/models/borrowing';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  private borrowing: Borrowing;

  constructor(
    private userService: RegistrationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let specimen_id = this.route.snapshot.paramMap.get('id') 
    this.borrowForm.patchValue({
      specimen: specimen_id
    });
  }

  borrowForm = new FormGroup({
    specimen: new FormControl(),
    user: new FormControl(),
    returnDate: new FormControl(),
    expire: new FormControl(),
  });

  onSubmit() {
    this.userService.get(this.borrowForm.get('user').value).subscribe(res => {
      // this.borrowing.user = res;
      console.log(res);
    });
    
    // this.borrowing.returnDate = this.borrowForm.get('returnDate').value;
    // this.borrowing.expire = this.borrowForm.get('expire').value;

    // console.log(this.borrowing);
  }
}
