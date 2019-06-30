import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { MaterialModule } from './shared/material/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { BorrowComponent } from './components/borrow/borrow.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    NavBarComponent,
    BooksComponent,
    RegistrationComponent,
    LoginComponent,
    UserIndexComponent,
    BookViewComponent,
    BorrowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
