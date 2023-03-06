// intro to Javascript -- web vs node, ECMA
// https://www.w3schools.com/js/js_versions.asp

// ------------- scope ------------
let myName = "Heidi" // myName in global scope

function changeName() {
    let myName = "Pepper"
    myName = "Chen" // search for the variables inside local scope first, then global one
    console.log(myName)
}

changeName() // Chen
console.log(myName) // Heidi

// ------------- Hoisting -------------
console.log(cat)
var cat = "Pepper"
console.log(cat)
// 1. create a variable - cat (with underfined)
// 2. in line 18, assign "Pepper" into cat
// 3. console.log could print out "Pepper"


//  ------------- const & let (not var) ------------
// Python: snake_case
// JavaScript/Java/C# : variable -- camelCase
// JavaScript/Java/C# : class name -- PascalCase
const food = "taco" // const: cannot be reassigned
let lunch = "sushi" // let: can be reassigned

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const skills = ["breaking the code", "fixing the bugs", "bootstrap"]
skills.push("Picking a good music")
skills[0] = "Fixing the code"
// skills = ["something else", "other skills"]
console.log(skills)

// ------------- destructuring ------------
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
 // Shift + Alt/Option + F

// const firstName = person.firstName
// const lastName = person["lastName"]

const { firstName, lastName, email, password, username} = person 
// 1. create the variables (firstName, lastName.....)
// 2. search for the keys from the person
// 3. reasign that value into the variables
console.log(person)

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [, , thirdAnimal] = animals
console.log(thirdAnimal)

// ------------- spread/rest ------------
const animalCopy = [...animals]
console.log(animalCopy)

const personCopy = {...person}
console.log(personCopy)

// ------------- arrow function ------------
function sayHello(name){
    console.log("Hello, "+ name)
}

const sayHello2 = function(name){
    console.log("Hello2, "+name)
}

const sayHello3 = (name) =>{
    console.log("Hello3, "+ name)
}

sayHello("Pepper")
sayHello2("Pepper")
sayHello3("Pepper")

// ------------- ternary operator (if-else) & short-circuited logical operator(if) ------------

