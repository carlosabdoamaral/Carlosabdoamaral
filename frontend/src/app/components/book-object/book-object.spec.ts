import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookObject } from './book-object';

describe('BookObject', () => {
  let component: BookObject;
  let fixture: ComponentFixture<BookObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookObject],
    }).compileComponents();

    fixture = TestBed.createComponent(BookObject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
