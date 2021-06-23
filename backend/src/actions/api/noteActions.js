const Note = require('../../db/models/Note');

class NoteActions {
  getAllNotes(req, res) {
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('Api działa - wszystkie notatki pobrano!');
  }

  getNote(req, res) {
    const id = req.params.id;
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('Pobrano notatkę! ID: ' + id);
  }

  saveNote(req, res) {
    const newNote = new Note({
      title: req.body.body,
      body: req.body.title,
    });
    newNote.save().then(() => console.log('Note has just been saved!'));

    res.send(`Stworzono notatkę! Title: ${req.body.title}; Body: ${req.body.body};`);
  }

  updateNote(req, res) {
    const id = req.params.id;
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('Notatka zaktualizowana! ID: ' + id);
  }

  deleteNote(req, res) {
    const id = req.params.id;
    // pobieranie notatek
    //  zwrócenie notatek|
    res.send('Notatka usunięta! ID: ' + id);
  }
}

module.exports = new NoteActions();
