import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BooksEntity } from '../+state/books.models';
import { BookManagerStateService } from './book-manager-state.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BookManagerStateService],
})
export class BookManagerComponent implements OnInit {
  vm$ = this.state.vm$;

  constructor(private state: BookManagerStateService) {}

  ngOnInit() {
    this.state.loadBooks();
  }

  showFormToggle() {
    this.state.showFormToggle();
  }

  selectTab(tabNo: number) {
    this.state.selectTab(tabNo);
  }

  upsertBook(book: BooksEntity) {
    this.state.upsertBook(book);
  }
}
