import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BooksComponent } from './components/books/books.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { BorrowComponent } from './components/borrow/borrow.component';


const routes: Routes = [
  {path:'books/create', component:BookCreateComponent},
  {path:'books', component:BooksComponent},
  {path:'books/edit/:id', component:BookCreateComponent},
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  { path:'users', component:UserIndexComponent },
  { path:'books/:id', component:BookViewComponent },
  { path:'lend/:id', component:BorrowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
