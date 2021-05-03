const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema({
    title:{
        type: String
    
    },
    content:{
        type:String

    }
})

// we will create a new collection 

const Record = mongoose.model("Record",RecordSchema);

module.exports ={Record}