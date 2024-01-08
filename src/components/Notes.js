import React, { useContext, useEffect } from 'react';
import notesContext from "../context/Notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(notesContext);
    const { notes, getNotes } = context;
    useEffect(() => {
      return (getNotes)
    }, [])
    
    return (
        <>
        <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes