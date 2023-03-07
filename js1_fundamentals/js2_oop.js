// --------------- OOP ---------------

// Constructing a class : constructor & methods
class Developer{ // in PascalCase
    // attribute/member variables  : what this instance has
    constructor(name = "Anonymous Hacker" , experience = 1){
        this.name = name
        this.languages = ["Python", "JavaScript", "HTML", "CSS"]
        this.experience = experience
        this.braincell = 10
        this.caffeinated = false
    }

    // methods: what the instance can do
    drinkCoffee(){
        this.braincell += 2;
        this.caffeinated = true
        console.log(`${this.name} is drinking 2 shots of espresso`)
        return this
    }

    coding(){
        this.experience++
        this.braincell -= 3
        this.caffeinated = false
        console.log(`${this.name} is coding............... nonstop....`)
        return this
    }
}

// inheriting a class 
class BackendDeveloper extends Developer{
    constructor(name="Anonymous Backend Developer", experience= 2){
        super(name, experience)
        this.patience = 10
        this.languages.push("MySQL")
    }

    coding(){
        this.patience ++
        console.log(`${this.name} is debugging`)
        super.coding()
        return this
    }
}

// test case

const dev1 = new Developer()
console.log(dev1)

const dev2 = new Developer("Pepper", 0)
console.log(dev2)

dev2.drinkCoffee().drinkCoffee().drinkCoffee()
console.log(dev2)

dev1.coding().coding().coding()
console.log(dev1)

const dev3 = new BackendDeveloper()
console.log(dev3)
dev3.coding().coding()
console.log(dev3)

