import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BooksEntity } from '../+state/books.models';
import { BookManagerStateService } from './book-manager-state.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss'],
  providers: [BookManagerStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookManagerComponent implements OnInit {
  vm$ = this.state.vm$;

  constructor(private state: BookManagerStateService) {}

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
