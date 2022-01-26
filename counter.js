class Counter {
    constructor(count){
        this._count = count;
    }

    increment(){
        this._count++;
    }

    decrement(){
        this._count--;
    }

    getCount(){
        return this._count;
    }
}

const c1 = new Counter(0);

console.log(c1.getCount());
c1.increment();
console.log(c1.getCount());
c1.increment();
console.log(c1.getCount());
c1.increment();
console.log(c1.getCount());

c1.decrement();
c1.decrement();
console.log(c1.getCount());

