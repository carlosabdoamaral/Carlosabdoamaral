import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-object',
  imports: [],
  templateUrl: './book-object.html',
  styleUrl: './book-object.scss',
})
export class BookObject {
  @Input() image: string = '';
  @Input() title: string = '';
}
