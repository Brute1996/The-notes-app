import { useEffect, useState } from "react";
import api from "../api";
import WorkspaceStyle from "./Workspace.styled";
import { innerTextFormater } from "../../helpers/helpers";
import moment from "moment/moment";
import { debounce } from "lodash";


const { noteTitle, noteBody } = api.fieldsNamesId;

const Workspace = ({ selectedNote, readOnlyToggle, selectedNoteRef }) => {
    const [noteTitleValue, setNoteTitleValue] = useState('')
    const [noteBodyValue, setNoteBodyValue] = useState('')
    const [createdNoteDate, setCreatedNoteDate] = useState('')

    useEffect(() => {
        if (!selectedNote) {
            setNoteTitleValue('')
            setNoteBodyValue('')
            return
        };

        setNoteTitleValue(selectedNote.values[noteTitle] || "");
        setNoteBodyValue(selectedNote.values[noteBody] || "");
        setCreatedNoteDate(selectedNote.created_at)
        
    },[selectedNote])

    useEffect(() => {
        if (!selectedNoteRef) {
            return
        };
        
        const selectedNoteTitleInList = selectedNoteRef.querySelector(".note-short-title");
        const selectedNoteBodyInList = selectedNoteRef.querySelector(".note-short-text");


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
                break;
        }
    };

    return (
        <WorkspaceStyle>
            <time dateTime={createdNoteDate}>
                {createdNoteDate && moment(createdNoteDate).format("MMM DD, YYYY [at] hh:mm A")}
            </time>
            <input onChange={handleChange}
                name="note-title"
                placeholder= {selectedNote && "Note title"}
                value={noteTitleValue}
                readOnly={readOnlyToggle}>
            </input>

            <textarea
                name="note-body"
                onChange={handleChange}
                placeholder={ selectedNote && "Enter your note..."}
                value={noteBodyValue}
                readOnly={readOnlyToggle}>
                
            </textarea>
        </WorkspaceStyle>
    )
};

export default Workspace;