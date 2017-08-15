/*
- It not copy value, it copy reference
*/
let keyValue = 1000;
function text() {
  keyValue = 2000;
}
export {keyValue, test};

import {keyValue, test} from './file.js';
console.log(keyValue); // 1000
test();
console.log(keyValue); // 2000

/*
- export default
*/
let ab = 'Some text';
export default ab;
import ab from './file.js';
import a from './file.js'; //any name

import {keyValue as key} from './file.js';

import a, {keyValue as key} from './file.js';

import * as imported from './file.js';
console.log(imported);

/*
- ES6 use 'use strict' by default
*/

/*
- Class prototype
*/
console.log(person.__proto__ === Person.prototype);
console.log(person.__proto__ === Object.prototype);
console.log(person.__proto__ === Object);

/*
- Inheritance
*/
class Max extends Person {
  constructor(age){
    super('Max');
    this.age = age;
  }

  greetTwice() {
    this.greet();
    this.greet(); // if this class have function name greet(), it will not work
    super.greet(); // still work
    super.greet();
  }
}
let max = new Max(27);
max.greet();
max.greetTwice();

/*
- Inheritance prototype
*/
max.__proto__ === Person           //false
max.__proto__ === Person.prototype //false

/*
- Static method
*/
class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

/*
- Class Module
*/
export class Helper {}

/*
- Getter & setter
*/
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if(value.length > 2)
      this._name = value;
    else
      console.log('Rejected');
  }
}
let person = new Person('Max');
console.log(person.name);
console.log(person._name);
person.name = 'Anna';
person._name = 'Anna';

/*
- Extending Built-in Objects
*/
class ConvertableArray extends Array {
  convert() {
    let returnArray = [];
    this.forEach(value => returnArray.push('Converted!' + value));
    return returnArray;
  }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert());
