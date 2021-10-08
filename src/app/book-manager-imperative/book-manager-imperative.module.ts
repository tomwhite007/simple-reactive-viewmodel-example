import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManagerImperativeRoutingModule } from './book-manager-imperative-routing.module';
import { BookManagerImperativeComponent } from './book-manager-imperative.component';
import { BookUiModule } from '../shared/book-ui/book-ui.module';

@NgModule({
  declarations: [BookManagerImperativeComponent],
  imports: [CommonModule, BookManagerImperativeRoutingModule, BookUiModule],
})
export class BookManagerImperativeModule {}
