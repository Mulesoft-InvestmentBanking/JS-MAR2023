const users = require("../models/user.models")

module.exports.apiTest = (req, res)=>{
    res.json({message: "Hello World"})   
}

module.exports.allUsers = (req, res)=>{
    res.json( users)
}

module.exports.oneUser = (req, res)=>{
    const paramsId = req.params.id
    res.json(users[paramsId])
}
module.exports.createUser = (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)   
}
module.exports.updateUser = (req, res)=>{
    const paramsId = req.params.id
    const updatedUser = req.body
    users[paramsId] = updatedUser
    res.json(users[paramsId])   
}
module.exports.deleteUser = (req, res)=>{
    const paramsId = req.params.id
    users.splice(paramsId,1)
    res.json({status: "ok"}) 
}
