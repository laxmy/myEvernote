import fireStore from "./firebase";

export const addNote = async (title, body) => {
  const newNote = {
    title,
    body,
    createdAt: new Date().toUTCString()
  };
  try {
    const newItemFromDb = await fireStore.collection("notes").add(newNote);
    return { ...newNote, id: newItemFromDb.id };
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteNote = async (noteId) => {
  try {
    await fireStore.collection("notes").doc(noteId).delete();
  } catch (err) {
    console.log(err);
  }
};

export const updateNote = async (noteId, content) => {
  try {
    const doc = await fireStore.collection("notes").doc(noteId);
    await doc.update({ body: content });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllNotes = async () => {
  try {
    const querySnapshot = await fireStore.collection("notes").get();
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    console.log(err);
    return [];
  }
};
