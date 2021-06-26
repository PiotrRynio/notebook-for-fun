const Note = require('../../db/models/Note');

class NoteActions {
  async getAllNotes(req, res) {
    await Note.find({}, (err, doc) => doc)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ message: `Server error: ${err}` }));
  }

  async getNote(req, res) {
    const _id = req.params._id;
    await Note.findOne({ _id: _id }, (err, doc) => doc)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(404).json({ message: `Brak notatki: ${err}` }));
  }

  async saveNote(req, res) {
    const { title, body } = req.body;
    await new Note({ title, body })
      .save()
      .then((note) => res.status(201).json(note))
      .catch((err) =>
        res.status(422).json({ message: `Brak wymaganych danych do utworzenia notatki: ${err}` }),
      );
  }

  async updateNote(req, res) {
    const { _id } = req.params;
    const { title, body } = req.body;
    await Note.findOne({ _id: _id }, (err, doc) => doc)
      .then((note) => {
        note.title = title || note.title;
        note.body = body || note.body;
        return note.save();
      })
      .then((note) => res.status(201).json(note))
      .catch((err) => res.status(422).json({ message: `Brak notatki: ${err}` }));
  }

  async deleteNote(req, res) {
    const _id = req.params._id;
    const msg = await Note.deleteOne({ _id: _id }).then(({ deletedCount }) =>
      deletedCount ? { status: 204 } : { status: 404, text: 'Not possible - note does not exist' },
    );
    res.status(msg.status).json({ message: msg.text });
  }
}

module.exports = new NoteActions();
