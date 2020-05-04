const express = require('express')
const router = express.Router();

const students = require('./students');
const library = require('./library');
const librarycard = require('./librarycard')


router.use('/students',students);
router.use('/library',library);
router.use('/librarycard',librarycard);

module.exports = router;