import { useContext, useEffect } from "react";
import api from "../api";
import SidebarStyle from "./Sidebar.styled";
import { NotesContext } from "../App";
import { nanoid } from "nanoid";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const Sidebar = () => {

    const { selectedNote, notes, setNotes, setSelectedNote, setSelectedNoteRef, readOnlyToggle, setReadOnlyToggle } = useContext(NotesContext);


    useEffect(() => {
        if (!selectedNote) {
            return;
        };

        setReadOnlyToggle(true)
        
    }, [selectedNote, setReadOnlyToggle]);

    const handleNoteCreate = () => {

        const { noteTitle, noteBody } = api.fieldsNamesId;

        const createdDate = new Date().toISOString();

        const newNote = {
            id: nanoid(),
            created_at: createdDate,
            values: {
                [noteBody]: "",
                [noteTitle]: "",
            },
        };
        
        api.createNote(newNote)
        setNotes([newNote, ...notes])
        setSelectedNote(newNote)
    };

    const handleNoteDelete = () => {
        if (!selectedNote) {
            return;
        };

        // eslint-disable-next-line no-restricted-globals
        const isDeleteAccepted = confirm("Do you want to delete this note?")

        if (isDeleteAccepted) {
            setNotes(notes.filter((note) => note.id !== selectedNote.id))
            api.deleteNote(selectedNote.id)
            setSelectedNote(null)
            setSelectedNoteRef(null)
        };
    };

    const handleNoteEdit = () => {
        if (!selectedNote) {
            return;
        };

        setReadOnlyToggle(!readOnlyToggle)
    };


    return (
        <SidebarStyle>
            <div className="buttons-block">
                <button
                    type="button"
                    onClick={handleNoteCreate}>
                    <AiOutlinePlus/>
                </button>
                <button
                    type="button"
                    onClick={handleNoteDelete}
                    disabled={selectedNote ? false : true}>
                    <AiOutlineDelete/>
                </button>
                <button
                    type="button"
                    onClick={handleNoteEdit}
                    disabled={selectedNote ? false : true}>
                    <FaRegEdit/>
                </button>
            </div>
        </SidebarStyle>
    )
};

export default Sidebar;