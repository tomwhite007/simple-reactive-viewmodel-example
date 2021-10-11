import { Component, OnInit } from '@angular/core';
import { BooksEntity } from '../+state/books.models';
import { BookManagerImperativeStateService } from './book-manager-imperative-state.service';

@Component({
  selector: 'app-book-manager-imperative',
  templateUrl: './book-manager-imperative.component.html',
  styleUrls: ['./book-manager-imperative.component.scss'],
  providers: [BookManagerImperativeStateService],
})
export class BookManagerImperativeComponent implements OnInit {
  vm = this.state.vm;

  constructor(private state: BookManagerImperativeStateService) {}

  ngOnInit() {
    this.state.loadBooks();
  }

  toggleShowForm() {
    this.state.toggleShowForm();
  }

  selectTab(tabNo: number) {
    this.state.setSelectedTab(tabNo);
  }

  upsertBook(book: BooksEntity) {
    this.state.upsertBook(book);
  }
}
