// currying
function greet(salutation) {
    return function (name) {
        return "".concat(salutation, " ").concat(name);
    };
}
var howdy = greet("Howdy");
var hello = greet("Hello");
console.log(howdy("Jimmy"));
console.log(hello("Ajim"));
var people = [
    { name: "Ajim", age: 20 },
    { name: "Anchi", age: 20 },
    { name: "Chima", age: 6 },
    { name: "Dan", age: 4 }
];
function isAge(age) {
    return function (person) {
        return person.age === age;
    };
}
var newPeople = people.filter(isAge(20));
console.log(newPeople);
// How to call a curryeable function
console.log(isAge(6)(people[2]));
/* Recursion */
function countDown(num) {
    console.log(num);
    num && countDown(num - 1);
}
countDown(20);
