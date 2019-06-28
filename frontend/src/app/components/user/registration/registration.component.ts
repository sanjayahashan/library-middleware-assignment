import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private user: User;

  constructor(
    private regService: RegistrationService,
  ) { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })

  onSubmit() {
    this.user = this.userForm.value;
    this.regService.add(this.user).subscribe(res => {
      console.log(res);
    })
  }

}
