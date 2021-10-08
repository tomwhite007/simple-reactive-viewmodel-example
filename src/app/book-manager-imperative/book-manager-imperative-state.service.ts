import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksFacade } from '../+state/books.facade';
import { BooksEntity } from '../+state/books.models';

interface BookManagerVm {
  showForm: boolean;
  selectedTab: number;
  allBooks: BooksEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class BookManagerImperativeStateService implements OnDestroy {
  vm: BookManagerVm = {
    showForm: false,
    selectedTab: 0,
    allBooks: [],
  };

  booksSubscription!: Subscription;

  constructor(private books: BooksFacade) {}

  loadBooks() {
    this.booksSubscription = this.books.allBooks$.subscribe(
      (res) => (this.vm.allBooks = res)
    );
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

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
