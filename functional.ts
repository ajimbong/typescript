// currying

function greet(salutation: string) {
    return function(name: string){
        return `${salutation} ${name}`
    }
}

let howdy = greet("Howdy");
let hello = greet("Hello");

console.log(howdy("Jimmy"))
console.log(hello("Ajim"))

// currying with filter
type Person = {
    name: string,
    age: number
}
const people: Person[] = [
    { name: "Ajim", age: 20 },
    { name: "Anchi", age: 20 },
    { name: "Chima", age: 6 },
    { name: "Dan", age: 4 }
]
    
function isAge(age: number){
    return function (person: Person) {
        return person.age === age;
    }
}

let newPeople = people.filter(isAge(20))
console.log(newPeople)

// How to call a curryeable function
console.log(isAge(6)(people[2]))


/* Recursion */

function countDown(num: number) {
    console.log(num)
    num && countDown(num - 1)
}

countDown(20)
