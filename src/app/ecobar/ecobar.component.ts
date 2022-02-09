import { Component, ViewEncapsulation  } from '@angular/core';
import 'src/assets/ecobar/dist/ecobar.js';
import config from 'src/assets/ecobar/dist/ecobar-env-settings.json';

declare var ecobarApp: any;

@Component({
  selector: 'ecobar',
  templateUrl: './ecobar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class EcobarComponent {

  ngOnInit(){
    
    ecobarApp.init(config);
  }
}