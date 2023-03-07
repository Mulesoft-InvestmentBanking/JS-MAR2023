// ------ callback functions -------

const makingPurchase = (person, price) =>{ 
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

const parentFunction = (person, price, fx)=>{ // going to a register
    console.log("Welcome to the store")
    fx(person, price)
}

parentFunction("Heidi", 100, returningItem)
parentFunction("Pepper", 10, makingPurchase)




// ------ Object.freeze() -------
const shoppingList = [
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, item: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false}, 
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}     
]


// ------ .map & .filter -------
// --- .map() ---
// DEMO: return an array of prices
const priceArr = []
for(const element of shoppingList){
    priceArr.push(element.price)
}
console.log(priceArr)

const priceArr2 = shoppingList.map((element)=>{
    return `<li> ${element.price}  </li>`
})
console.log(priceArr2)

// TODO: return a list of item names


// --- .filter() ---
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = []
for(const element of shoppingList){
    if(element.price < 100){ // the return for .filter
        cheapItems.push(element)
    }
}
console.log(cheapItems)

const cheapItems2 = shoppingList.filter((element)=>{
    return element.price < 100
})
console.log(cheapItems2)
 
// DEMO: return a list of cheap items with only the names
const cheapItemNames = shoppingList
    .filter((element)=>element.price < 100)
    .map((ele)=> ele.item)

console.log(cheapItemNames)


// TODO: given a deleteId, return a list of items without the item of that matching id 


// TODO: given an array index, return a list of items without the item of that index 


// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean 




// ------ The big Freeze (More built-in functions for object & array)  -------
// -- arr.push alternative 1 : concat (glue 2 arrays together) --

// -- arr.push alternative 2 : spread (create an array with ...arr) --


// -- slice : return a portion of the array --


// -- splice vs slice (splice: remove the element, slice: return a portion) --


// -- Sorting --



