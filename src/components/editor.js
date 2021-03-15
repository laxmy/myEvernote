import React from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";

const Editor = ({ note, updateNote }) => (
  <div className="main">
    <ReactQuill value={note.body || ""} onChange={(content) => updateNote(content)} />
  </div>
);

export default Editor;

Editor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  note: PropTypes.object,
  updateNote: PropTypes.func
};
