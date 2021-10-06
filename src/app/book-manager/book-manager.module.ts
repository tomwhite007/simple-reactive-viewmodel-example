import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManagerRoutingModule } from './book-manager-routing.module';
import { BookManagerComponent } from './book-manager.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookStuffComponent } from './book-stuff/book-stuff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookManagerComponent,
    AddBookFormComponent,
    BookListComponent,
    BookStuffComponent,
  ],
  imports: [
    CommonModule,
    BookManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookManagerModule {}
