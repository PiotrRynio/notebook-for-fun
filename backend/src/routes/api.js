const express = require('express');
const router = express.Router();

const {
  deleteNote,
  getAllNotes,
  getNote,
  saveNote,
  updateNote,
} = require('../actions/api/noteActions');

router.get('/notes/', getAllNotes);
router.get('/notes/:id', getNote);
router.post('/notes/', saveNote);
router.put('/notes/', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
