import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service/book.service';
@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  books: Book[];
  cols: any[];
  totalRecords: number;

  constructor(private bookService: BookService) { 
    this.books = [];
  }

  ngOnInit() {
      this.bookService.getBooks().
      then(books => this.books = books);
      this.cols = [
        { field: 'name', header: 'Title' },
        { field: 'author', header: 'Author' },
        { field: 'price', header: 'Price' }      
      ];
      this.totalRecords=this.books.length;
  }

}