import angular from 'angular';

//-----------------------------------------
//                  Modules
//-----------------------------------------

// Single import
import appModule from './app.module';

// Multiple imports
//import {appModule} from './app.module';

//-----------------------------------------
//                  Variables
//-----------------------------------------
var x = 100;
let someValue = {symbol: 'ES6'};
const API_URL = 'http://localhost:3000/api';


//-----------------------------------------
//                  Functions
//-----------------------------------------
appModule.controller('TestController', function ($http) {
    "use strict";

    this.name = 'TestController';

    $http.get('http://www.google.com')
        .then((response)=> {
            console.log(this.name, ':', response);
        })
        .catch((error)=> {
            // this here is lexical and not set at runtime
            console.log(this.name, ':', error);
        });
});

//var adder = (x, y)=> { return x + y; };
var adder = (x, y)=> x + y;
console.log('1 + 3 = ' + adder(1, 3));

// Math.min.apply(Math, [1,2,3,4,5])
var args = [1,2,3,4,5];
console.log('Math.min: ', Math.min(...args));
//-----------------------------------------
//                  Template Strings
//-----------------------------------------

var template = `
<div class="flex-container">
    <div class="flex-item">${'5 + 4 = ' + adder(5,4)}</div>
    <div class="flex-item">${new Date().getFullYear()}</div>
    <div class="flex-item">${appModule.name}</div>
</div>
`;

console.log(template);
//-----------------------------------------
//                  Destructuring
//-----------------------------------------
var {first, last} = { first: 'Pavan', last: 'Podila'};
console.log(first, last);
var [a, b, c] = [1, 2, 3];
var [a, {b, c}] = [1, {b: 2, c: 3}];

var [_, first, last] = 'Pavan Podila'.match(/([a-z]+)\s([a-z]+)/i);
console.log(first, last);
//-----------------------------------------
//                  Object Literals
//-----------------------------------------

//-----------------------------------------
//                  Classes
//-----------------------------------------

//-----------------------------------------
//                  Iterators
//-----------------------------------------

//-----------------------------------------
//                  Generators
//-----------------------------------------
var addOne = (x)=> {
    return x + 1;
};

var range = (limit)=> {

    var iterator = {
        [Symbol.iterator]() {
            "use strict";
            let counter = 0;

            return {
                next() {
                    let obj = {done: (counter >= limit), value: counter};
                    counter = counter + 1;
                    return obj;
                }
            };
        }
    };

    return iterator;
};

var rangeGenerator = (limit)=> {
    "use strict";
    var counter = 0;
    return {
        *[Symbol.iterator]() {
            while (counter < limit) {
                yield counter;
                counter++;
            }
        }
    };
};

console.log('Using Range Generator');
for (let x of rangeGenerator(10)) {
    console.log(x);
}

console.log('Using Iterator');
for (let x of range(20)) {
    console.log(x);
}

angular.bootstrap(document.body, [appModule.name]);

var injector = angular.element(document.body).injector();
injector.get('$controller')('TestController');

