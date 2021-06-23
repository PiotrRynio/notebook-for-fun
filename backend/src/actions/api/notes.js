const Note = require('../../db/models/Note');

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title: 'Zrobić zakupy',
      body: 'Mleko, jajka, marchew',
    });
    newNote.save().then(() => console.log('Note has just been saved!'));
  },
};
