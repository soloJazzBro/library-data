import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../service/theme.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  visibleSidebar1;
  items: MenuItem[];
  theme: string;
  themeOption: any;
  constructor(private themeService: ThemeService) {}

    ngOnInit() {
        let themeOption = localStorage.getItem('themeOption');
        themeOption = themeOption != null && themeOption != undefined ? themeOption : 'light';
        this.themeOption = themeOption;
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
    
    onChangeTheme(e: Event){
        this.themeOption = e;
        this.themeService.switchTheme(this.themeOption);
    }
}
