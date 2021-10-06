import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      map(() =>
        // dummy api result
        BooksActions.loadBooksSuccess({
          books: [
            {
              id: '9780141199078',
              title: 'Pride and Prejudice',
            },
            {
              id: '9780141181479',
              title: 'The Chrysalids',
            },
            {
              id: '9780563477389',
              title: 'The Lion, The Witch And The Wardrobe',
            },
            {
              id: '9781787302549',
              title: 'Nineteen Eighty-Four',
            },
            {
              id: '9780141185064',
              title: 'The Grapes of Wrath',
            },
          ],
        })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
