import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>
        <span>La base es de {{ base }}</span>

        <br>

        <button (click)="accumulate(-base);"> - {{base}}</button>
        <span> {{ counter }} </span>
        <button (click)="accumulate(base);"> + {{base}}</button>
    `
})
export class CounterComponent {
    title: string = 'Contador App';
    counter: number = 0;

    base: number = 5;


    accumulate(valor:number){
        this.counter += valor;
    }
}