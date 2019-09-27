const express = require('express');
const router = express.Router();
const axios = require('axios');

const mongoose = require('mongoose');

//const User = require('../../models/User');
//const Eatery = require('../../models/Eatery');

// @route    GET api/eateries/grades
// @desc     Get Eatery Grades
// @access   Public
// @eNote - return eateriesGrades produces Circular Error - need to re-visit

async function getNYCData() {
  console.log("Eateries Route api");

  return axios.get('https://data.cityofnewyork.us/resource/43nn-pn8j.json');
}
router.get('/grades', async (req, res) => {
  try {
    const eateriesGrades = await getNYCData();
    res.status(200).send('Route works fetching eateriesGrades');
    //return eateriesGrades;

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error - fetching eateriesGrades');
  } //end try
}); //end router get

module.exports = router;
