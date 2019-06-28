import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BooksComponent } from './components/books/books.component';
import { RegistrationComponent } from './components/user/registration/registration.component';


const routes: Routes = [
  {path:'books/create', component:BookCreateComponent},
  {path:'books', component:BooksComponent},
  {path:'books/:id', component:BookCreateComponent},
  {path:'register', component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
