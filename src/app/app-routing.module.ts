import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./book-manager/book-manager.module').then(
        (m) => m.BookManagerModule
      ),
  },
  {
    path: 'books-imperative',
    loadChildren: () =>
      import('./book-manager-imperative/book-manager-imperative.module').then(
        (m) => m.BookManagerImperativeModule
      ),
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
