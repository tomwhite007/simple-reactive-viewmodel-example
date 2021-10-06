import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManagerRoutingModule } from './book-manager-routing.module';
import { BookManagerComponent } from './book-manager.component';


@NgModule({
  declarations: [
    BookManagerComponent
  ],
  imports: [
    CommonModule,
    BookManagerRoutingModule
  ]
})
export class BookManagerModule { }
