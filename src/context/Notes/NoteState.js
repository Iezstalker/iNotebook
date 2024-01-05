import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial =
    [
        {
          "_id": "658fc403ab2cac41380d1294",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:17:23.672Z",
          "__v": 0
        },
        {
          "_id": "658fc403ab2cac41380d1294",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:17:23.672Z",
          "__v": 0
        },
        {
          "_id": "658fc403ab2cac41380d1294",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:17:23.672Z",
          "__v": 0
        },
        {
          "_id": "658fc403ab2cac41380d1294",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:17:23.672Z",
          "__v": 0
        },
        {
          "_id": "658fc403ab2cac41380d1294",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:17:23.672Z",
          "__v": 0
        },
        {
          "_id": "658fc44e590343921f44d9cc",
          "user": "658c41721a2aa2a45de6206a",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-12-30T07:18:38.135Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, notesInitial}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;