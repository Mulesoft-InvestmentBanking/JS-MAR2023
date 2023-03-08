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
const shoppingList = Object.freeze([
    {id: 3, name: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, name: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, name: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, name: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false}, 
    {id: 10, name: "Steak", price: 31, shops: ["Trader Joes"], required: true}     
])


// ------ .map & .filter -------
// --- .map() ---
// DEMO: return an array of prices
const priceArr2 = shoppingList.map((element)=>{
    return `<li> ${element.price}  </li>`
})
console.log(priceArr2)

// The above .map using normal for-loop
const priceArr = []
for(const element of shoppingList){
    priceArr.push(element.price)
}
console.log(priceArr)


// TODO: return a list of item names


// --- .filter() ---
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems2 = shoppingList.filter((element)=>{
    return element.price < 100
})
console.log(cheapItems2)

// The above filter using normal for-loop
const cheapItems = []
for(const element of shoppingList){
    if(element.price < 100){ // the return for .filter
        cheapItems.push(element)
    }
}
console.log(cheapItems)


// DEMO: return a list of cheap items with only the names
const cheapItemNames = shoppingList
    .filter((element)=>element.price < 100)
    .map((ele)=> ele.name)

console.log(cheapItemNames)


// TODO: given a deleteId, return a list of items without the item of that matching id 
const deleteId = 9;


// TODO: given an array index, return a list of items without the item of that index 
const deleteIdx = 0



// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean 


// ------ The big Freeze (More built-in functions for object & array)  -------
const campingList = Object.freeze([
    {id: 20, name: "RV", price: 50000, shops: ["Camping world", "Craigslist"], required: true},
    {id: 21, name: "tent", price: 500, shops: ["Craigslist"], required: true}
])
// -- arr.push alternative 1 : concat (glue 2 arrays together) --
const shoppingListWithCamping = shoppingList.concat(campingList)
console.table(shoppingListWithCamping)

// -- arr.push alternative 2 : spread (create an array with ...arr) --
const newItem = {id: 11, name: "TV", price: 500, shops: ["BestBuy"], required: false}
const shoppingListWithTV = [...shoppingList , ...campingList,  newItem]
console.table(shoppingListWithTV)

// -- slice : return a portion of the array --
const slicedItems = shoppingList.slice(0,3)
console.table(slicedItems)

// -- splice vs slice (splice: remove the element, slice: return a portion) --
const array=[1,2,3,4,5];
console.log(array.splice(1, 2)) // delete 2 elements from array[1]
console.log(array)

const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)

// -- Sorting --
console.log(cheapItemNames)
const sortedNames = [...cheapItemNames].sort()
console.log(sortedNames)

console.log(priceArr)
const sortedPrice = [...priceArr].sort((a, b)=> b-a)
console.log(sortedPrice)

console.table(shoppingList)
const sortedShoppingList = [...shoppingList].sort((a, b)=>a.price - b.price )
console.table(sortedShoppingList)