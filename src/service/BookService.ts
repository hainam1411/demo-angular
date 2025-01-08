import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('https://677df5a294bde1c12529dcb9.mockapi.io/api/books/BooksAPI')
  }
}
