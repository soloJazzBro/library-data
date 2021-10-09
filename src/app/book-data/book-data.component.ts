import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service/book.service';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css'],
  providers: [MessageService]
})
export class BookDataComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  cols: any[];
  totalRecords: number;
  displayModal: boolean;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig, private bookService: BookService) { 
    this.books = [];
  }

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.bookService.getBooks().
      then(books => this.books = books);
      this.cols = [
        { field: 'name', header: 'Title' },
        { field: 'author', header: 'Author' },
        { field: 'price', header: 'Price' }      
      ];
      this.totalRecords=this.books.length;

  }

  onClickNew(){
    var asdf = 'asdf';
  }

  onClickEdit(){
    if(this.selectedBook !== undefined){
      this.showEditDialog(this.selectedBook);
    }
    else {
      this.showConfirm2();
    }
  }

  onClickDelete(){
    if(this.selectedBook !== undefined){
      this.showConfirm();
    }
    else {
      this.showConfirm2();
    }
  }

  showEditDialog(book: Book){
    if(book !== undefined){
      this.displayModal = true;
    }
  }

  showSuccess() {
    this.messageService.add({key: 'br', severity:'success', summary: 'Success', detail: 'Added new book :)'});
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  showConfirm2() {
    this.messageService.clear();
    this.messageService.add({key: 'c2', sticky: true, severity:'info', summary:'Please select a book!'});
  }

  onConfirm() {
    this.messageService.clear('c');
    this.messageService.add({key: 'br', severity:'error', summary: 'Error', detail: 'Could not delete book :('});
  }

  onReject() {
    this.messageService.clear('c');
    this.messageService.clear('c2');
  }

  selection(rowData: Book) {
    this.messageService.add({severity:'info', summary:'Book Selected', detail: rowData.name});
  }

  onRowSelect(event) {
      //this.messageService.add({severity:'info', summary:'Book Selected', detail: this.selectedBook.name });
  }

  onRowUnselect(event) {
      //this.messageService.add({severity:'info', summary:'Book Unselected',  detail: event.rowData.name});
  }
}