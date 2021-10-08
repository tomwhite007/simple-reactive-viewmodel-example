import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagerComponent } from './book-manager.component';
import { BookManagerRoutingModule } from './book-manager-routing.module';
import { BookUiModule } from '../shared/book-ui/book-ui.module';

@NgModule({
  declarations: [BookManagerComponent],
  imports: [CommonModule, BookManagerRoutingModule, BookUiModule],
})
export class BookManagerModule {}
