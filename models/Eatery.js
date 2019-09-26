const mongoose = require('mongoose');

//https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j
//https://data.cityofnewyork.us/resource/43nn-pn8j.json

const EaterySchema = new mongoose.Schema({
    camis: String,
    dba: String,
    boro: String,
    building: String,
    street: String,
    zipcode: String,
    phone: String,
    cuisine_description: String,
    searchText: String,
    latitude: Number,
    longitude: Number,
    grade: String,
    gradeDate: String,

    inspections: [{
        date: String,
        action: String,
        violation_code: String,
        violation_desc: String,
        critical_flag: String,
        score: String,
        grade: String,
        grade_date: String,
        record_date: String,
        inspection_type: String
    }]
});

// define the model
module.exports = Eatery = mongoose.model('eatery', EaterySchema);