import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksEntity } from '../+state/books.models';
import { BookManagerImperativeStateService } from './book-manager-imperative-state.service';

@Component({
  selector: 'app-book-manager-imperative',
  templateUrl: './book-manager-imperative.component.html',
  styleUrls: ['./book-manager-imperative.component.scss'],
  providers: [BookManagerImperativeStateService],
})
export class BookManagerImperativeComponent implements OnInit, OnDestroy {
  vm = this.state.vm;
  booksSubscription!: Subscription;

  constructor(private state: BookManagerImperativeStateService) {}

  ngOnInit() {
    this.booksSubscription = this.state.books$.subscribe((res) =>
      this.state.updateVmFromBooks(res)
    );

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

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
