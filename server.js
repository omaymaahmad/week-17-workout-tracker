// Require in necessary packages
const express = require("express");
const mongoose = require("mongoose")

//Initialise PORT variable

const PORT = process.env.PORT || 3030; 

//Initialise Express Application
const app = express(); 

//Set Up Express Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public")); 

//Set Up Mongoose Connection
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Attach Routes to the server
app.use(require("./routes/api"));
app.use(require("./routes/view"));

//Run app and listen on PORt
app.listen(PORT, () => {
    console.log("Application Running....")
})

