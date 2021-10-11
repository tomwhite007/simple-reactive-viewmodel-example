import { Injectable, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { BooksFacade } from '../+state/books.facade';
import { BooksEntity } from '../+state/books.models';

interface BookManagerVm {
  showForm: boolean;
  selectedTab: number;
  allBooks: BooksEntity[];
}

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class BookManagerImperativeStateService {
  vm: BookManagerVm = {
    showForm: false,
    selectedTab: 0,
    allBooks: [],
  };

  constructor(private books: BooksFacade) {}

  loadBooks() {
    this.books.allBooks$
      .pipe(untilDestroyed(this))
      .subscribe((res) => (this.vm.allBooks = res));
    this.books.loadBooks();
  }

  toggleShowForm() {
    this.vm.showForm = !this.vm.showForm;
  }

  setSelectedTab(tabNo: number) {
    this.vm.selectedTab = tabNo;
  }

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
