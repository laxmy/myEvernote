import React from "react";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import NoteListItem from "./noteListItem";

const SideBar = ({
  notes, addNewNote, selectedNoteId, changeSelectedNote, deleteNote
}) => (
  <div className="sidebar">
    <Button onClick={addNewNote}>New Note</Button>
    <List>
      {notes.map((note) => (
        <NoteListItem
          note={note}
          key={note.id}
          isSelected={note.id === selectedNoteId}
          onSelect={changeSelectedNote}
          deleteNote={() => deleteNote(note.id)}
        />
      ))}
    </List>
  </div>
);

export default SideBar;

SideBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notes: PropTypes.array,
  addNewNote: PropTypes.func,
  selectedNoteId: PropTypes.string,
  changeSelectedNote: PropTypes.func,
  deleteNote: PropTypes.func
};
