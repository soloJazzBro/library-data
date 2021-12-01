import { Component, ViewEncapsulation  } from '@angular/core';
import 'src/assets/ecobar/dist/ecobar.min.js';
//import ecobarEnvSettings from 'src/assets/ecobar/dist/ecobar-env-settings.min.json';

declare var ecobarApp: any;

@Component({
  selector: 'ecobar',
  templateUrl: './ecobar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class EcobarComponent {

  ngOnInit(){
    //const config = ecobarEnvSettings;
    ecobarApp.init();
  }
}