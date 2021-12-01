import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service/book.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ThemeService } from '../service/theme.service';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

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
  id: number;
  title: string;
  author: string;
  price: string;
  themeOption: any;
  gridsterConfig: GridsterConfig;
  gridsterItemArray: Array<GridsterItem>;

  constructor(
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig, 
    private bookService: BookService,
    private themeService: ThemeService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) { 
    this.books = [];
  }
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }
  ngOnInit() {
      this.primengConfig.ripple = true;
      this.bookService.getBooks().
      then(books => this.books = books);

      this.cols = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Title' },
        { field: 'author', header: 'Author' },
        { field: 'price', header: 'Price' }      
      ];
      this.gridsterConfig = {
        draggable: { 
          enabled: true 
        },
        swap: false,
        pushItems: true,
        maxCols: 4,
      }
      this.gridsterItemArray = [
        {cols: 2, rows: 1, y: 0, x: 0},
        {cols: 2, rows: 2, y: 0, x: 2},
       /* {cols: 1, rows: 1, y: 0, x: 4},
        {cols: 1, rows: 1, y: 2, x: 5},
        {cols: 1, rows: 1, y: 1, x: 0},
        {cols: 1, rows: 1, y: 1, x: 0},
        {cols: 2, rows: 2, y: 3, x: 5},
        {cols: 2, rows: 2, y: 2, x: 0},
        {cols: 2, rows: 1, y: 2, x: 2},
        {cols: 1, rows: 1, y: 2, x: 4},
        {cols: 1, rows: 1, y: 2, x: 6}*/
      ];
      this.totalRecords=this.books.length;
      let themeOption = localStorage.getItem('themeOption');
      themeOption = themeOption != null && themeOption != undefined ? themeOption : 'light';
      this.themeOption = themeOption;
      this.themeService.switchTheme(themeOption);
/*
      const js = [
        'assets/ecobar_3.0/libs/plainJS.menu-aim.js',
        'assets/ecobar_3.0/js/events/ecobarEventHandler.js',
        'assets/ecobar_3.0/js/environment/envSettingsSkeleton.js',
        'assets/ecobar_3.0/js/model/ecobarModel.js',
        'assets/ecobar_3.0/js/view/ecobarView.js',
        'assets/ecobar_3.0/js/controller/ecobarController.js',
        'assets/ecobar_3.0/js/ecobarApp.js',
      ];

      for(let i = 0; i < js.length; i ++){
        let script = this.renderer2.createElement('script');
        script.type = 'text/javascript';
        script.src = js[i];
        this.renderer2.appendChild(this._document.body, script);
      }

      let link = this.renderer2.createElement('link');
      link.type = 'text/css';
      link.href = 'assets/ecobar_3.0/css/ecobar.css';
      this.renderer2.appendChild(this._document.body, link);
      */
  }

  removeGridsterItem(gridsterItem) {
    this.gridsterItemArray.splice(this.gridsterItemArray.indexOf(gridsterItem), 1);
  }

  addGridsterItem() {
    const gridsterItem: GridsterItem = { cols: 2, rows: 2, y: 0, x: 2 };
    this.gridsterItemArray.push(gridsterItem);
  }
  
  onClickNew(){
    var  bookLength = localStorage.getItem('bookLength');
    var nextId: number = bookLength != null ? +bookLength + 1 : 0;
    this.id = nextId;
    this.title = "";
    this.author = "";
    this.price = "";
    this.displayModal = true;
  }

  onClickEdit(){
    if(this.selectedBook != null){
      this.showEditDialog(this.selectedBook);
    }
    else {
      this.showConfirm2(false);
    }
  }

  onClickDelete(){
    if(this.selectedBook != null){
      this.showConfirm();
    }
    else {
      this.showConfirm2(false);
    }
  }

  showEditDialog(book: Book){
    if(book !== undefined){
      this.displayModal = true;
      this.title = book.name;
      this.author = book.author;
      this.price = book.price;
    }
  }

  showSuccess() {
    this.messageService.add({key: 'br', severity:'success', summary: 'Success', detail: 'Added new book :)'});
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:''});
  }

  showConfirm2(isNew: boolean) {
    if(!isNew){
      this.messageService.clear();
      this.messageService.add({key: 'c2', sticky: true, severity:'info', summary:'Please select a book!'});
    }
  }

  onClickSave(){
    var books = localStorage.getItem('books');
    var array = books != null ? JSON.parse(books) : [];
    var item = array.find(x => x.id == this.id);
    if (item) {
      item.name = 'asdf';
    }
    this.displayModal = false;
    this.messageService.add({key: 'br', severity:'success', summary: 'Success', detail: 'Book has been saved :)'});
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
    if(this.selectedBook != null){
      //this.messageService.add({severity:'info', summary:'Book Selected', detail: this.selectedBook.name });
    }
  }

  onRowUnselect(event) {
      this.messageService.add({severity:'info', summary:'Book Unselected',  detail: event.rowData.name});
  }
}