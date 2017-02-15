'use strict';

// Looping
const numbers = [1,2,3,4,5];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for(let number of numbers){
    console.log(number);
}

for (let [index, number] of numbers.entries()){
    console.log(`${index} -- ${number}`);
}

numbers.forEach(n => console.log(n));


// object
const sam = {
    first: 'sam',
    age: 2,
    play: function() {
        console.log('playing');
    },
};

console.log(sam);
sam.play();


const callWork = function(instance){
    try{
        instance.work()
    }catch(ex)
    {
        console.log('no function');
    }
};

callWork(sam);

const employee = {
    work: () => console.log('workign')
};

sam.__proto__ = employee;
callWork(sam);

const manager = {
    work: () => console.log('play golf')
};

sam.__proto__ = manager;
callWork(sam);

console.log(sam);
console.log(sam.__proto__);
console.log(sam.__proto__.__proto__);
console.log(sam.__proto__.__proto__.__proto__);


// Classes
class Person {
    constructor(first, last){
        console.log(this);
        this.first = first;
        this.last = last;
    }

    static kind() {
        return 'human';
    }

    toString(){
        return `${this.first} ${this.last}`;
    }
}


Person.prototype.reveal = 'hi';

console.log(Person);

// This is what the compiler actually does
// Person.call(inst, 'Ryan', 'Furness');
const me = new Person('Ryan', 'Furness');
console.log(me);
console.log(me.toString());
console.log(Person.toString());// a different to string!
console.log(Person.kind());
console.log(me.reveal);

console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(Person));

for (const prop in me){
    console.log(prop);
}


class SuperPerson extends Person{
    constructor(firstName, lastName, superPower){
        super(firstName, lastName);
        this.power = superPower;
    }

    toString(){
        return `${super.toString()} has super power ${this.power}`;
    }
}

let flash = new SuperPerson('barry', 'alan', 'speed');
console.log(flash.toString());

class CoolPerson extends Person{

}

let cool = new CoolPerson('awesome','dude');
console.log(cool.toString());


class Vehicle{}
Vehicle.prototype.miles = 0;

class Car extends  Vehicle {
    drive(distance){
        this.miles += distance;
    }
}

const car1 = new Car();
const car2 = new Car();
console.log(car1.__proto__ === Car.prototype);
console.log(car2.__proto__ === Car.prototype);
console.log(car2.__proto__ === car1.__proto__);
console.log(car1.miles);
console.log(car2.miles);

for(let prop in car1){
    console.log(prop, '---' , car1.hasOwnProperty(prop));
}

car1.drive(10);
console.log(car1.miles);
console.log(car2.miles);


for(let prop in car1){
    console.log(prop, "---" , car1.hasOwnProperty(prop));
}
