const mongoose = require('mongoose');

const dbName = "destinationdb"
const username = process.env.ATLAS_USERNAME // read variable in .env
const pw = process.env.ATLAS_PASSWORD
const uri = `mongodb+srv://${username}:${pw}@cluster0.nnjyafu.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));    