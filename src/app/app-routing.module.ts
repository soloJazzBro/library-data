import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDataComponent } from './book-data/book-data.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenubarComponent } from './menubar/menubar.component';
const routes: Routes = [
  { path: '', component: BookDataComponent },
  { path: '', component: ToolbarComponent },
  { path: '', component: MenubarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
