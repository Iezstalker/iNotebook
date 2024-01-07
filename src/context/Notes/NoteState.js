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
        "_id": "658fc44e590343921f44d9cc",
        "user": "658c41721a2aa2a45de6206a",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-12-30T07:18:38.135Z",
        "__v": 0
      },
      {
        "_id": "659aab01ad113c9eb8a89e62",
        "user": "658c41721a2aa2a45de6206a",
        "title": "My title 2",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-01-07T13:45:37.038Z",
        "__v": 0
      },
      {
        "_id": "659aab09ad113c9eb8a89e64",
        "user": "658c41721a2aa2a45de6206a",
        "title": "My title 3",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-01-07T13:45:45.522Z",
        "__v": 0
      },
      {
        "_id": "659aab0ead113c9eb8a89e66",
        "user": "658c41721a2aa2a45de6206a",
        "title": "My title 4",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-01-07T13:45:50.089Z",
        "__v": 0
      },
      {
        "_id": "659aab14ad113c9eb8a89e68",
        "user": "658c41721a2aa2a45de6206a",
        "title": "My title 5",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-01-07T13:45:56.067Z",
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