import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor() {} 

  new:ICharacter = {
    name: 'Maestro Rochi',
    power: 500
  }

}
