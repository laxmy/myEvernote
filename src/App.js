/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { useEffect, useState } from "react";
import SideBar from "./components/sidebar";
import Editor from "./components/editor";
import * as NotesDb from "./notesDbHelper";

const App = () => {
  const [notes, setNotes] = useState([]);
  const initialSelectedId = notes && notes.length > 0 && notes[0].id;
  const [selectedNoteId, setSelectedNote] = useState(initialSelectedId);

  const addNewNote = async () => {
    try {
      const newNote = await NotesDb.addNote("untitled", "");
      setNotes([...notes, newNote]);
      setSelectedNote(newNote.id);
    } catch (err) {
      console.log("what to do?");
    }
  };

  const updateNote = async (noteId, content) => {
    try {
      if (await NotesDb.updateNote(noteId, content)) {
        setNotes(
          notes.map((note) => {
            if (note.id === noteId) {
              return { ...note, body: content };
            }
            return note;
          })
        );
      }
    } catch (err) {
      console.log("what to do?");
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await NotesDb.deleteNote(noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (err) {
      console.log(err);
    }
  };

  const getInitialState = async () => {
    const result = await NotesDb.getAllNotes();
    setNotes(result);
  };

  useEffect(() => {
    getInitialState();
  }, []);

  return (
    <div className="App">
      <h1> Hello world</h1>
      <div className="flex-container">
        <SideBar
          notes={notes}
          addNewNote={addNewNote}
          deleteNote={deleteNote}
          selectedNoteId={selectedNoteId}
          changeSelectedNote={setSelectedNote}
        />
        <Editor
          note={notes.filter((note) => note.id === selectedNoteId)[0]}
          updateNote={updateNote}
        />
      </div>
    </div>
  );
};

export default App;
