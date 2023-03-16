// 1. import all dependencies
const express = require("express")
const app = express()

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// 2. configure express
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() ); // recognize JSON object
app.use( express.urlencoded({ extended: true }) ); //to recognize the incoming Req object as strings/arrays


// 3. define routes & logic
app.get("/api/testing", (req, res)=>{
    res.json({message: "Hello World"})
})

// get all
app.get("/api/users", (req, res)=>{
    res.json( users)
})

// get one
app.get("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id
    res.json(users[paramsId])
})

// create user
app.post("/api/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
})

// update a user
app.put("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id
    const updatedUser = req.body
    users[paramsId] = updatedUser
    res.json(users[paramsId])
})

// delete a user
app.delete("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id
    users.splice(paramsId,1)
    res.json({status: "ok"})
})


// 4. listen on the port
app.listen(8000, ()=>console.log(`Listening on port: 8000`))

