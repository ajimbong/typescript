"use strict";
function greet(salutation) {
    return function (name) {
        return `${salutation} ${name}`;
    };
}
let howdy = greet("Howdy");
let hello = greet("Hello");
howdy("Jimmy");
hello("Ajim");
