const mongoose = require("mongoose")
function connectToDB(){
    mongoose.connect("mongodb+srv://Arpana:tVOBriLibZpCuJBi@cluster0.gaahd6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database Connected");
}


module.exports = connectToDB;