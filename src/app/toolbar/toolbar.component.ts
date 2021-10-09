import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  visibleSidebar1;
  items: MenuItem[];
  constructor() { }

ngOnInit() {
    this.items = [
        {
            label: 'New',
            icon: 'pi pi-plus'
        },
        {
            label: 'Edit',
            icon: 'pi pi-pencil'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            separator:true
        },
        {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        }
    ];
}
  
}
