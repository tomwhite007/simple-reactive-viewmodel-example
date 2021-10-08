import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookStuffComponent } from './book-stuff/book-stuff.component';
import { ShowFormCheckboxComponent } from './show-form-checkbox/show-form-checkbox.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    AddBookFormComponent,
    BookStuffComponent,
    ShowFormCheckboxComponent,
    TabsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    BookListComponent,
    AddBookFormComponent,
    BookStuffComponent,
    ShowFormCheckboxComponent,
    TabsComponent,
  ],
})
export class BookUiModule {}
