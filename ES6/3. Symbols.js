let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
symbol == anotherSymbol // False, It have UNIQUE ID

let symboil1 = Symbol.for('age');
let symboil2 = Symbol.for('age');
symboi1 == symbol2 // True

// Well-known symbol