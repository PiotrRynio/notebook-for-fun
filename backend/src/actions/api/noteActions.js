const Note = require('../../db/models/Note');

class NoteActions {
  getAllNotes(req, res) {
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('Api działa');
  }

  getNote(req, res) {
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('..');
  }

  saveNote(req, res) {
    const newNote = new Note({
      title: 'Zrobić zakupy',
      body: 'Mleko, jajka, marchew',
    });
    newNote.save().then(() => console.log('Note has just been saved!'));
  }

  updateNote(req, res) {
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('..');
  }

  deleteNote(req, res) {
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('..');
  }
}

module.exports = new NoteActions();
