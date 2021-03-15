/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import {
  ListItemIcon, ListItemSecondaryAction, ListItemText, ListItem
} from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";

const NoteListItem = ({
  note, isSelected, onSelect, deleteNote
}) => {
  const onChange = () => {
    onSelect(note.id);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <ListItem onClick={onChange}>
      <ListItemText className={isSelected ? "selected" : ""}>
        {note.title}
        <ListItemSecondaryAction>
          <ListItemIcon>
            <DeleteOutlineOutlined onClick={deleteNote} />
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItemText>
    </ListItem>
  );
};
export default NoteListItem;

NoteListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  note: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
  deleteNote: PropTypes.func
};
