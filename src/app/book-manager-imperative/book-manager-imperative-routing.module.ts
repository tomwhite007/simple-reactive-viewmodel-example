import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagerImperativeComponent } from './book-manager-imperative.component';

const routes: Routes = [{ path: '', component: BookManagerImperativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookManagerImperativeRoutingModule { }
