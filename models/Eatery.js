const mongoose = require('mongoose');

const EaterySchema = new mongoose.Schema({
    camis: String,
    name: String,
    boro: String,
    building: String,
    street: String,
    zipcode: String,
    phone: String,
    cuisine: String,
    searchText: String,

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