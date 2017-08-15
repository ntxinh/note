/*
1. Let Block Scope
- scope of it in {} closest
*/
let a = 1;
if(true){
  let a = 2;
}
console.log(a);

/*
2. const
- should set name is CAPLOCK
- const is array can push value to it
- const is object can change value properties
*/

/*
3. Hoisting
- su dung truoc, khai bao sau
*/

function doSth(){
  age = 27;
}
let age;
console.log(age);

/*
4. Fat Arrow function
() => {}
*/

/*
5 .Default Parameter
*/

/*
6. Object Literal Extension
*/
let name = 'Anna';
let age = 25;
let obj = {
  name,
  age,
  [name]: 'A'
};
console.log(obj);

/*
7. The Rest Operator
*/
funciton sumUp(...toAdd){
  console.log(toAdd);
}

/*
8. The Spread Operator
*/
let numbers = [1,2,3,4,5];
console.log(Math.max(...numbers));

/*
9. for ... of
*/

/*
10. Template literals
*/
`Hello ${name}`

/*
11. Destructuring Array
*/
let numbers = [1,2,3];
let [a,b,c] = numbers;
let [a, ...b] = numbers;
let [a = 'Default',b,c] = numbers;
let a = 5;
let b = 10;
[b, a] = [a, b];
let [a, , c] = numbers;

/*
12. Destructuring Object
*/
let obj = {
  name: 'Max',
  age: 27,
  greet: function(){
    console.log('Hello world');
  }
};
let {name, age} = obj;
// preference to name
let {name1, age1} = obj; // not work
let {name, greet: hello} = obj;
hello();





