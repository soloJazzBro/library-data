import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  id;
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  async getBooks() {
    const res = await this.http.get<any>('assets/books.json')
      .toPromise();
    const data = <Book[]>res.data;
    localStorage.setItem('books', JSON.stringify(res.data));
    localStorage.setItem('booksLength', res.data.length);
    return data;
    }
}