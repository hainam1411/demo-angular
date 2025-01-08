import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {CurrencyPipe} from '../pipes/CurrencyPipe.pipe';
import {HoverEffectDirective} from '../../hover-effect.directive';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BookItem} from '../type/bookItem';

@Component({
  selector: 'app-book-item',
  imports: [
    CurrencyPipe,
    HoverEffectDirective,
    NgForOf,
    NgIf,
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './book-item.component.html',
  standalone: true,
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  showBooks = true;
  @Input() books: BookItem[] = [];
  @Output() dataEvent = new EventEmitter<number>();

  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
}

get totalPrice(): number {
    const totalPrice = this.books.reduce((total, book) =>{
      return total + book.price
    }, 0);
    return totalPrice;
}

ngOnChanges(changes: SimpleChanges) : void {
  console.log(changes['books'].currentValue);
  console.log(changes['books'].previousValue);
}


}
