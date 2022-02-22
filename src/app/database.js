const Mongoose = require('mongoose');
//load database
Mongoose.connect(process.env.MONGO_URL || "mongodb+srv://kleberbs:leales1205@cluster0.ytwni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});
exports.db = db;