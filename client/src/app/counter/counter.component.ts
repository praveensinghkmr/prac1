import { Component } from "@angular/core";

@Component({
    selector: "counter",
    template: `    
    <div>
    <button (click)="increment()">+</button>
        <div>{{getCount()}}</div>
        <button (click)="decrement()">-</button>
    </div>
`,
    styles: [],
})

export class CounterComponent {

    private count: number;
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}


