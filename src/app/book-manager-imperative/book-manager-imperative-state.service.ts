import { Injectable } from '@angular/core';
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
export class BookManagerImperativeStateService {
  vm: BookManagerVm = {
    showForm: false,
    selectedTab: 0,
    allBooks: [],
  };

  books$ = this.books.allBooks$;

  constructor(private books: BooksFacade) {}

  loadBooks() {
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

  updateVmFromBooks(books: BooksEntity[]) {
    this.vm.allBooks = books;
  }
}
