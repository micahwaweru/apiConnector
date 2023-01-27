const router = require('express').Router();
const viewNote = require('./viewNote');
const viewNotes = require('./viewNotes');
const createNote = require('./createNote');

router.use('/viewNote', viewNote);
router.use('/viewNotes', viewNotes);
router.use('/createNote', createNote);


module.exports = router;