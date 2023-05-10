import { useContext, useEffect, useRef } from "react";
import api from "../api";
import WorkspaceStyle from "./Workspace.styled";
import { debounce } from "lodash";
import { NotesContext } from "../App";
import DisplayDateTime from "../DisplayDateTime/DisplayDateTime";


const { noteTitle, noteBody } = api.fieldsNamesId;

const Workspace = () => {
    const { selectedNote, selectedNoteRef } = useContext(NotesContext);

    const selectedNoteTitleInList = selectedNoteRef?.querySelector(".note-short-title");
    const selectedNoteBodyInList = selectedNoteRef?.querySelector(".note-short-text");
    const inputTitleRef = useRef();
    const textAreaBodyRef = useRef();


    useEffect(() => {
        if (!selectedNote) {
            inputTitleRef.current.value = "";
            textAreaBodyRef.current.value = "";
            return
        };
        

        inputTitleRef.current.value = selectedNote.values[noteTitle];
        textAreaBodyRef.current.value = selectedNote.values[noteBody];
    },[selectedNote])


    const handleChange = debounce((e) => {
        const { name, value } = e.target;
        switch (name) {
            case "note-title":
                selectedNoteTitleInList.innerText = value;
                selectedNote.values[noteTitle] = value;

                api.updateNote(selectedNote.id, selectedNote);
                break;
            case "note-body":
                selectedNoteBodyInList.innerText = value;
                selectedNote.values[noteBody] = value;

                api.updateNote(selectedNote.id, selectedNote);
                break;
            default:
                return;
        }
    }, 500)

    return (
        <WorkspaceStyle>
            <DisplayDateTime selectedNote={selectedNote} />
            <input
                ref={inputTitleRef}
                onChange={handleChange}
                name="note-title"
                placeholder= {selectedNote && "Enter note title..."}
                readOnly={selectedNote?.editMode ? false : true}
            />

            <textarea
                ref={textAreaBodyRef}
                name="note-body"
                onChange={handleChange}
                placeholder={ selectedNote && "Your note..."}
                readOnly={selectedNote?.editMode ? false : true}
            />
            
        </WorkspaceStyle>
    )
};

export default Workspace;