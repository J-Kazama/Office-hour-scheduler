var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scheduleSchema =new Schema({
    schedule:{
        type: String
    }
})

var schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = schedule;