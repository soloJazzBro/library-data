import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label:'Actions',
              icon:'pi pi-fw pi-file',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-plus',
                  },
                  {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-trash'
                  },
                  {
                      separator:true
                  },
                  {
                      label:'Export',
                      icon:'pi pi-fw pi-external-link'
                  }
              ]
          },
      ];
  }
}