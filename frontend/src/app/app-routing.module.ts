import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {path:'books/create', component:BookCreateComponent},
  {path:'books', component:BooksComponent},
  {path:'books/:id', component:BookCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
