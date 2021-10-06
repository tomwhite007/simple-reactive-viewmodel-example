import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {
  // load books stub for later connect to api
  loadBooks$ = createEffect(
    () => this.actions$.pipe(ofType(BooksActions.loadBooks)),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
