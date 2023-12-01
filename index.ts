/**
 * TYPESCRIPT USE CASES
 * - Catch common bugs at compile time
 * - Provide auto complete features for declared 
 *   types within the editor
 * - Good for collaborating with other devs
 */

/* VARIABLES */
let age: number = 5;
let fName: string = "ajim";
let isTall: boolean = false;
let sports: string[] = ["tennis", "football", "jodo"];

let person: [number, string, boolean] = [age, fName, isTall];  // Tuple

let productId: string | number              //Enums
productId = "Et20032"

enum Direction {                            //Enums
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}



/* TYPES | OBJECTS */

enum MarriageStatus {                       // Enum
    married,
    noMarried 
}

type User = {                               // Custom Type
    readonly id: string                     // Declaring Read Only Properties
    name: string
    age: number
    isTall: boolean
    maritalStatus?: MarriageStatus          // Optional Properties
}
type Point = number | string                // Custom Type

const person2: User = {                     // Object
    id: "et20020",
    name: "Ajim",
    age: 20,
    isTall: false
}



/* FUNCTIONS */

function sayHello(name: string): void{
    console.log(`Hello ${name}`)
}



/* CLASSES | INTERFACES*/

interface IHuman {                          // Interface
  displayInfo(): void
}

class Human implements IHuman{
    protected name: string;
    protected age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    displayInfo(): void {
        console.log(`Hello my name is ${this.name} and I am ${age} years old`)
    }
}

const human1 = new Human('Ajim', 20);
human1.displayInfo()

class Citizen extends Human{
    country: string;

    constructor(name: string, age: number, gender: string) {
        super(name, age)
        this.country = gender
    }

    displayInfo(): void {
        console.log(`Hello my name is ${this.name}, from ${this.country} and I am ${this.age} years old`);
    }
}

const citizen1 = new Citizen("Bong", 15, "Cameroon");
citizen1.displayInfo()



/* GENERICS */

function itemAsArray<T>(item: T): T[]{
    return [item]
}

console.log(itemAsArray<string>("mandate"));
console.log(itemAsArray<number>(5));