import { Component } from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {BookItem} from '../shared/type/bookItem';
import {BookItemComponent} from '../shared/product-item/book-item.component';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../../service/BookService';

@Component({
  selector: 'app-cart',
  imports: [
    NgStyle,
    BookItemComponent,
    NgIf,

  ],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private bookService: BookService) {
    console.log('test constructor');
  }

  ngOnInit(): void {
    // console.log('test ngOnInit');
    this.bookService.getBooks()
      .subscribe(Books => {
       this.books = Books.map((book: any) => {
         return {
           ...book,
           image: 'assets/images/book1.jpg'
         }
        });
      });
  }

  // ngDoCheck(): void {
  //   console.log('check component')
  // }

  books: BookItem[] = [
    // {
    //   id: 1,
    //   image: 'assets/images/book1.jpg',
    //   title: 'Sơn Hải kinh',
    //   author: 'Hạ Vũ',
    //   price: 220000
    // },
    // {
    //   id: 2,
    //   image: 'assets/images/book2.jpg',
    //   title: 'Sherlock Holmes',
    //   author: 'Conan Doyle',
    //   price: 100000
    // },
    // {
    //   id: 3,
    //   image: 'assets/images/book3.jpg',
    //   title: 'Giết con chim nhại',
    //   author: 'Harper Lee',
    //   price: 90000
    // },
    // {
    //   id: 4,
    //   image: 'assets/images/book3.jpg',
    //   title: 'Giết con chim nhại',
    //   author: 'Harper Lee',
    //   price: 90000
    // },
    // {
    //   id: 5,
    //   image: 'assets/images/book3.jpg',
    //   title: 'Giết con chim nhại',
    //   author: 'Harper Lee',
    //   price: 90000
    // },
    // {
    //   id: 6,
    //   image: 'assets/images/book3.jpg',
    //   title: 'Giết con chim nhại',
    //   author: 'Harper Lee',
    //   price: 90000
    // },
    // {
    //   id: 7,
    //   image: 'assets/images/book3.jpg',
    //   title: 'Giết con chim nhại',
    //   author: 'Harper Lee',
    //   price: 90000
    // }
  ];


  isActive = true;
  isVisible = true;

  handleChangeVisible = () => {
    this.isVisible = !this.isVisible;
  }

  handleDelete(id: number) {
    // const  bookIndex = this.books.findIndex(book => book.id == id);
    // if (bookIndex !== -1) {
    //   this.books.splice(bookIndex, 1)
    // }
    this.books = this.books.filter((book) => book.id !==id)
  }
}
