"use strict";
let age = 5;
let fName = "ajim";
let isTall = false;
let sports = ["tennis", "football", "jodo"];
let person = [age, fName, isTall];
let productId;
productId = "Et20032";
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
var MarriageStatus;
(function (MarriageStatus) {
    MarriageStatus[MarriageStatus["married"] = 0] = "married";
    MarriageStatus[MarriageStatus["noMarried"] = 1] = "noMarried";
})(MarriageStatus || (MarriageStatus = {}));
const person2 = {
    id: "et20020",
    name: "Ajim",
    age: 20,
    isTall: false
};
function sayHello(name) {
    console.log(`Hello ${name}`);
}
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Hello my name is ${this.name} and I am ${age} years old`);
    }
}
const human1 = new Human('Ajim', 20);
human1.displayInfo();
class Citizen extends Human {
    constructor(name, age, gender) {
        super(name, age);
        this.country = gender;
    }
    displayInfo() {
        console.log(`Hello my name is ${this.name}, from ${this.country} and I am ${this.age} years old`);
    }
}
const citizen1 = new Citizen("Bong", 15, "Cameroon");
citizen1.displayInfo();
function itemAsArray(item) {
    return [item];
}
console.log(itemAsArray("mandate"));
console.log(itemAsArray(5));
