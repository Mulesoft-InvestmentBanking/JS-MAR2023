const DestinationController = require("../controllers/destination.controller")

module.exports = (app)=>{
    app.get("/api/testing", DestinationController.apiTest)
    app.get("/api/destinations", DestinationController.allDestinations)
    app.get("/api/destinations/:id", DestinationController.oneDestination)
    app.post("/api/destinations", DestinationController.createDestination)
    app.put("/api/destinations/:id", DestinationController.updateDestination)
    app.delete("/api/destinations/:id", DestinationController.deleteDestination)
}