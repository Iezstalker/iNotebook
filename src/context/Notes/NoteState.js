import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:108"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    //TODO: API Call
    const url = `${host}/api/notes/fetchallnotes/`
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4YzQxNzIxYTJhYTJhNDVkZTYyMDZhIn0sImlhdCI6MTcwMzkxOTM3NH0.X9q5qkAynt13xWFVMsXVVLnvG0VBgQKJBrnEJ4-k20g"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    const url = `${host}/api/notes/addnote/`
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4YzQxNzIxYTJhYTJhNDVkZTYyMDZhIn0sImlhdCI6MTcwMzkxOTM3NH0.X9q5qkAynt13xWFVMsXVVLnvG0VBgQKJBrnEJ4-k20g"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: JSON.stringify({title, description, tag}), // body {data} type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)

    console.log("Adding a new note")
    const note = {
      "_id": "659aab14ad113c9eb8a89e68fd",
      "user": "658c41721a2aa2a45de6206a",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-01-07T13:45:56.067Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const url = `${host}/api/notes/deleteNote/${id}`
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4YzQxNzIxYTJhYTJhNDVkZTYyMDZhIn0sImlhdCI6MTcwMzkxOTM3NH0.X9q5qkAynt13xWFVMsXVVLnvG0VBgQKJBrnEJ4-k20g"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = response.json()
    console.log(json)

    console.log("Deleting the node with id " + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const url = `${host}/api/notes/updateNote/${id}`
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4YzQxNzIxYTJhYTJhNDVkZTYyMDZhIn0sImlhdCI6MTcwMzkxOTM3NH0.X9q5qkAynt13xWFVMsXVVLnvG0VBgQKJBrnEJ4-k20g"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: JSON.stringify({title, description, tag}), // body {data} type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id){
        element.title = title;
        element.description = description; 
         element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;