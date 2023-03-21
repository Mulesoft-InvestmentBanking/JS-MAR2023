// option 1
// const Destination = require("../models/destination.model")

// option 2
const {Destination} = require("../models/destination.model")

module.exports.apiTest = (req, res)=>{
    res.json({message: "It is working"})
}

module.exports.allDestinations = (req, res)=>{
    Destination.find()
        .then(destList=> res.json(destList))
        .catch(err=>res.status(400).json(err))
}

module.exports.oneDestination = (req, res)=>{
    Destination.findOne({_id: req.params.id})
        .then(oneDest=> res.json(oneDest))
        .catch(err=>res.status(400).json(err))
}

module.exports.createDestination = (req, res)=>{
    const newDest = req.body
    Destination.create(newDest)
        .then(addedDest => res.json(addedDest))
        .catch(err=>res.status(400).json(err))
}

module.exports.updateDestination = (req, res)=>{
    Destination.findOneAndUpdate(
        {_id: req.params.id}, // criteria
        req.body, // updated info,
        {new: true, runValidators: true}// config
    )
        .then(updatedDest => res.json(updatedDest))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteDestination = (req, res)=>{
    Destination.deleteOne({_id: req.params.id})
        .then(message=>res.json(message))
        .catch(err=>res.status(400).json(err))
}

