//-----------------------------------------
//                  Modules
//-----------------------------------------
import angular from 'angular';

// Single import
import appModule from './app.module';

// Multiple imports
//import {appModule} from './app.module';

angular.bootstrap(document.body, [appModule.name]);


//-----------------------------------------
//                  Variables
//-----------------------------------------
var x = 100;
let someValue = {symbol: 'ES6'};
const API_URL = 'http://localhost:3000/api';

for (let counter = 0; counter < 5; counter++) {
    console.log(counter);
}

//console.log(counter); // ReferenceError!!

{
    let blockVar = 'Some Value';

    function insideBlock() {}

    //import appModule1 from './app.module';
}
//console.log(blockVar); // ReferenceError!!
//console.log(insideBlock); // ReferenceError!!


//-----------------------------------------
//                  Functions
//-----------------------------------------
var extendedAdd = (x, y)=> { return x + y; };

var add = (x, y)=> x + y;
console.log('1 + 3 = ' + add(1, 3));

// this
var $http = angular.element(document.body).injector().get('$http');
var obj = {
    url: 'http://www.sapient.com',
    fetchData() {
        "use strict";

        $http.get(this.url)
            .then((response)=> {
                console.log(this.url, ':', response);
            })
            //.catch(function(error) {
            //    // this here is lexical and not set at runtime
            //    console.log(this.url, ':', error);
            //});
            .catch((error)=> {
                // this here is lexical and not set at runtime
                console.log(this.url, ':', error);
            });

    }
};
obj.fetchData();


//-----------------------------------------
//         Spread and Rest Arguments
//-----------------------------------------
// Math.min.apply(Math, [1,2,3,4,5])
var args = [1, 2, 3, 4, 5];
console.log('Math.min: ', Math.min(...args));

function processArgs(a, b, ...args) {
    "use strict";

    console.log('processArgs: ', a, b, args);
}

processArgs(1, 2, 3, 4, 5);


//-----------------------------------------
//                  Template Strings
//-----------------------------------------

var template = `
<div class="flex-container">
    <div class="flex-item">${'5 + 4 = ' + add(5, 4)}</div>
    <div class="flex-item">${new Date().getFullYear()}</div>
    <div class="flex-item">${appModule.name}</div>
</div>
`;

console.log(template);


//-----------------------------------------
//                  Destructuring
//-----------------------------------------
var {first, last} = {first: 'Pavan', last: 'Podila'};
console.log(first, last);

var [a, b, c] = [1, 2, 3];
var [a, {b, c}] = [1, {b: 2, c: 3}];

var [_, first, last] = 'Pavan Podila'.match(/([a-z]+)\s([a-z]+)/i);
console.log(first, last);


function perform(a, {b, c}) {
    "use strict";

    console.log('perform: ', a, b, c);
}

perform(1, {b: 2, c: 3});
perform(1, {});


//-----------------------------------------
//                  Object Literals
//-----------------------------------------
var helper = {
    name: 'date-helper',

    startOfDay(){
        "use strict";

        var dt = new Date();
        dt.setHours(0, 0, 0);

        return dt;
    },

    endOfDay(){
        "use strict";

        var dt = new Date();
        dt.setHours(23, 59, 59);

        return dt;
    },

    ['special' + ':' + 'property']: 'Special Value'
};
//-----------------------------------------
//                  Classes
//-----------------------------------------
class TestHelper {

    constructor() {
        "use strict";

        // Initialize
    }

    getTestData() {
        "use strict";

    }

    performAction() {
        "use strict";

        console.log('TestHelper#performAction()')
    }

    static versionString() {
        "use strict";

        return '1.2.3';
    }

    get origin() { return 'Origin: www.sapient.com'; }
}

class AdvancedTestHelper extends TestHelper {

    performAction() {
        "use strict";
        console.log('AdvancedTestHelper#performAction()')

        super.performAction();

    }
}

var helper = new AdvancedTestHelper();
console.log(helper.origin);
helper.performAction();
//-----------------------------------------
//                  Iterators
//-----------------------------------------

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

console.log('Using Iterator');
for (let x of range(20)) {
    console.log(x);
}

for (let x of [1,2,3]) {
    console.log('Of: ' + x);
}

//-----------------------------------------
//                  Generators
//-----------------------------------------



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


