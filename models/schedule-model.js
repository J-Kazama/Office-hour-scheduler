var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scheduleSchema =new Schema({
    schedule:{
        type: String,
        required: true

    },
    name:{
        type: String,
        minlength: 7,
        required: true
    },
    email :{
        type: String,
        required: true
    }
})
var schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = schedule;