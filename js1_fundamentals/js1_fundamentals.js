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
    createdAt: 1543945177623,
    addresses: [
        {
          address: '1600 Pennsylvania Avenue',
          city: 'Washington, D.C.',
          zipcode: '20500',
        },
        {
          address: '221B Baker St.',
          city: 'London',
          zipcode: 'WC2N 5DU',
        }
      ],
};
 // Shift + Alt/Option + F

// const firstName = person.firstName
// const lastName = person["lastName"]

const { firstName, lastName, email, password : hashedPassword, username, addresses : [firstAddress, secondAddress]} = person 
// 1. create the variables (firstName, lastName, hashedPassword.....)
// 2. search for the keys from the person (firstName, lastName, email, password )
// 3. reasign that value into the variables
console.log(person)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [, , thirdAnimal] = animals
console.log(thirdAnimal)

// ------------- spread/rest ------------

const animalCopy = [...animals, 'hamster'] // important! push without .push
console.log(animals)
console.log(animalCopy)

const personCopy = {...person, createdAt : "12345"}
console.log(personCopy)



// ------------- arrow function ------------
function sayHello(name){ 
    console.log("Hello, "+ name)
}

const sayHello2 = function(name){
    console.log("Hello2, "+name)
}
// () => {}
const sayHello3 = (name) =>{
    console.log("Hello3, "+ name)
}

const sayHello4 = name =>{
    console.log(`Hello4, ${name}`)
}

const sayHelloAnonymous = () =>{
    console.log("Hello, stranger!")
}
sayHello("Pepper")
sayHello2("Pepper")
sayHello3("Pepper")
sayHello4("Pepper")
sayHelloAnonymous()

// function that return something
function changePrice(price, discount){
    return price*discount
}

// longhanded arrow function
const changePrice2 = (price, discount) =>{ // with {}, need "return"
    return price*discount
}

// shorthanded arrow function
const changePrice3 = (price, discount) => price*discount // without {}, implicit return

const changePrice4 = (price, discount) => (price*discount) // with (), implicit return


console.log(changePrice(100, 0.8))
console.log(changePrice2(100, 0.7))
console.log(changePrice3(100, 0.6))
console.log(changePrice4(100, 0.5))
// ------------- ternary operator (if-else) & short-circuit logical operator(if) ------------

const rating = 7

if(rating >5){
    console.log("This restaurant is great!")
}else{
    console.log("This restaurant needs improvement!")
}

// (condition)?true-statement: else-statement
rating >5?
    console.log("This restaurant is great!!"):
    console.log("This restaurant needs improvement!!")

// short-circuit logical operator(if)  --- condition&& result
const likes = 100
if(likes > 50){
    console.log("This is popular")
}

likes>50 && rating>5&&  console.log("This is popular!!")