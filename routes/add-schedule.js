var router =require('express').Router();
var userSchedule = require('../models/schedule-model');
//console.log("gets here");
router.route('/').post((req, res) => {
    var schedule = req.body.schedule;
    var name = req.body.name;
    var email= req.body.email;

    var newSchedule = new userSchedule({
        schedule,
        name,
        email
        
    })
    newSchedule.save()
        .then(() => res.json("added"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;