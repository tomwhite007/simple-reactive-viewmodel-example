import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksFacade } from '../+state/books.facade';
import { BooksEntity } from '../+state/books.models';

@Injectable()
export class BookManagerStateService {
  private localState$ = new BehaviorSubject({
    showForm: false,
    selectedTab: 0,
  });

  vm$ = combineLatest([this.books.allBooks$, this.localState$]).pipe(
    map(([allBooks, localState]) => ({ allBooks, ...localState }))
  );

  constructor(private books: BooksFacade) {}

  loadBooks() {
    this.books.loadBooks();
  }

  toggleShowForm() {
    this.localState$.next({
      ...this.localState$.value,
      showForm: !this.localState$.value.showForm,
    });
  }

  setSelectedTab(tabNo: number) {
    this.localState$.next({
      ...this.localState$.value,
      selectedTab: tabNo,
    });
  }

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
