import { useContext, useEffect, useState } from "react";
import api from "../api";
import WorkspaceStyle from "./Workspace.styled";
import { innerTextFormater } from "../../helpers/helpers";
import { debounce } from "lodash";
import { NotesContext } from "../App";
import DisplayDate from "../DisplayDate/DisplayDate";


const { noteTitle, noteBody } = api.fieldsNamesId;

const Workspace = () => {
    const { selectedNote, selectedNoteRef } = useContext(NotesContext);


    const [noteTitleValue, setNoteTitleValue] = useState('')
    const [noteBodyValue, setNoteBodyValue] = useState('')


    const selectedNoteTitleInList = selectedNoteRef?.querySelector(".note-short-title");
    const selectedNoteBodyInList = selectedNoteRef?.querySelector(".note-short-text");


    useEffect(() => {
        if (!selectedNote) {
            setNoteTitleValue('')
            setNoteBodyValue('')
            return
        };

        setNoteTitleValue(selectedNote.values[noteTitle] || "");
        setNoteBodyValue(selectedNote.values[noteBody] || "");
        
    },[selectedNote])

    useEffect(() => {
        if (!selectedNoteRef) {
            return
        };

        selectedNoteTitleInList.innerText = innerTextFormater(20, noteTitleValue);
        selectedNoteBodyInList.innerText = innerTextFormater(20, noteBodyValue);
        selectedNote.values[noteTitle] = noteTitleValue;
        selectedNote.values[noteBody] = noteBodyValue;
        

        // api.updateNote(selectedNote.id, selectedNote);

    }, [noteTitleValue, noteBodyValue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "note-title":
                setNoteTitleValue(value)
                break;
            case "note-body":
                setNoteBodyValue(value)
                break;
            default:
                return;
        }
    };

    return (
        <WorkspaceStyle>
            <DisplayDate selectedNote={selectedNote} />
            <input
                onChange={handleChange}
                name="note-title"
                placeholder= {selectedNote && "Enter note title..."}
                value={noteTitleValue}
                readOnly={selectedNote?.editMode ? false : true}
            />

            <textarea
                name="note-body"
                onChange={handleChange}
                placeholder={ selectedNote && "Your note..."}
                value={noteBodyValue}
                readOnly={selectedNote?.editMode ? false : true}
            />
            
        </WorkspaceStyle>
    )
};

export default Workspace;