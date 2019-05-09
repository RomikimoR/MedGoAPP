const mongoose = require('mongoose');

var mailSchema = mongoose.Schema({
    emailFrom:{
        type: String,

    },
    emailTo:{
        type: String,        
    },
    message:{
        type: String, 
    }
})

module.exports = mongoose.model('Mail', mailSchema);