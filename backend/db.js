const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/expensee"

const connectToMongo=()=>{
   mongoose.connect(mongoURI,()=>{
    console.log('connected to mongo');
    
   }) 
}
module.exports = connectToMongo;