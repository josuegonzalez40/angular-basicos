import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heros:string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  heroDelete:string = '';

  deleteHero():void {
    // this.heroDelete = this.heros.splice(0,1)[0];
    this.heroDelete = this.heros.shift() || '';
  }

}
