const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://danishabbas:kazmi12345@eventextractor.5h9okqe.mongodb.net/node testDB.js")
.then(() => {
    console.log("Connected!");
    process.exit();
})
.catch(err => {
    console.log("Error:", err);
});
