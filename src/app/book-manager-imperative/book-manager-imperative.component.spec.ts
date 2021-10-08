import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagerImperativeComponent } from './book-manager-imperative.component';

describe('BookManagerImperativeComponent', () => {
  let component: BookManagerImperativeComponent;
  let fixture: ComponentFixture<BookManagerImperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookManagerImperativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookManagerImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
