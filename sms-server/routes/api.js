const express = require('express')
const router = express.Router();

const classroom = require('./classroom')
const students = require('./students');
const library = require('./library');
const librarycard = require('./librarycard');
const attendance = require('./attendance.js')


router.use('/classroom',classroom);
router.use('/students',students);
router.use('/library',library);
router.use('/librarycard',librarycard);
router.use('/attendance',attendance);

module.exports = router;