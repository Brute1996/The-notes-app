import { useContext, useEffect, useState } from "react";
import api from "../api";
import WorkspaceStyle from "./Workspace.styled";
import { innerTextFormater } from "../../helpers/helpers";
import moment from "moment/moment";
import { debounce } from "lodash";
import { NotesContext } from "../App";


const { noteTitle, noteBody } = api.fieldsNamesId;

const Workspace = () => {
    const { selectedNote, readOnlyToggle, selectedNoteRef } = useContext(NotesContext);


    const [noteTitleValue, setNoteTitleValue] = useState('')
    const [noteBodyValue, setNoteBodyValue] = useState('')
    const [createdNoteDate, setCreatedNoteDate] = useState('')
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    useEffect(() => {
        if (!selectedNote) {
            setNoteTitleValue('')
            setNoteBodyValue('')
            setCreatedNoteDate('')
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


    const displayDate = () => {
        const createNoteDateFormatted = moment(createdNoteDate).format("[note was created at] MMM DD, YYYY [at] hh:mm A");

        if (createdNoteDate) {
            return createNoteDateFormatted;
        } else {
            return currentTime.format("[now] MMM DD, YYYY [at] hh:mm A");
        }

    }


    return (
        <WorkspaceStyle>
            <time dateTime={createdNoteDate}>
                {displayDate(createdNoteDate)}
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