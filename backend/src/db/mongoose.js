const mongoose = require('mongoose');

// db connect
mongoose
  .connect('mongodb://127.0.0.1:27017/notes-notesForFan', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then();

const Note = mongoose.model('Note', {
  title: String,
  body: String,
});

const newNote = new Note({
  title: 'tytuł tekstowy',
  body: 'text naszej notatki',
});

newNote.save().then(() => console.log('notatka została zapisana'));
