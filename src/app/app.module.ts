import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { MenubarComponent } from './menubar/menubar.component';
import {MenubarModule} from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DividerModule } from "primeng/divider";
import { AccordionModule } from 'primeng/accordion';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { GridsterModule } from 'angular-gridster2';


@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    ToolbarComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    MenubarModule,
    SidebarModule,
    ToastModule,
    RippleModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    AccordionModule,
    ScrollPanelModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }