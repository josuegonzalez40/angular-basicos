import { Component } from "@angular/core";



@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    name:string = "IronMan";
    age:number = 20;

    get nameCapitalized():string {
        return this.name.toUpperCase();
    }

    getName():string {
        return `${this.name} - ${this.age}`;
    }

    changeName():void {
        this.name = 'SpiderMan'
    }

    changeAge():void {
        console.log(55);
        this.age = 30;
    }
}