import { useContext, useEffect, useRef } from "react";
import api from "../api";
import {ListItemStyle, ListStyle} from "./ListItem.styled";
import { NotesContext } from "../App";
import { innerTextFormater } from "../../helpers/helpers";


const { noteTitle, noteBody } = api.fieldsNamesId;


const ListItem = ( ) => {
    const {
        notes,
        selectedNote,
        setSelectedNote,
        setSelectedNoteRef,
        searchQuery
    } = useContext(NotesContext);

    const notesRefs = useRef([]);

    useEffect(() => {
        if (!selectedNote) {
            return
        }

        const selectedNoteIndex = notes.indexOf(selectedNote)
        const selectedNoteRef = notesRefs.current[selectedNoteIndex];
        setSelectedNoteRef(selectedNoteRef)
    }, [selectedNote])

    const handleClick = (noteId) => {
        setSelectedNote(notes.find(({ id }) => id === noteId)) 
    }

    const filteredNotes = () => {
        const normlizeQuery = searchQuery.toLowerCase();

        return notes.filter((note) => note.values[noteTitle].toLowerCase().includes(normlizeQuery));
    };

    return (
        <ListStyle>
            {filteredNotes().map(({ values, id }, index) =>
                <ListItemStyle
                    style={{backgroundColor: selectedNote?.id === id ? "rgba(0,0,0,0.1" : "" }}
                    onClick={() => handleClick(id, index)}
                    key={id}
                    ref={(ref) => notesRefs.current[index] = ref}>
                    <h2 className="note-short-title">{innerTextFormater(20, values[noteTitle]) }</h2>
                    <p className="note-short-text">{innerTextFormater(20, values[noteBody]) }</p>
                </ListItemStyle>)}
        </ListStyle>
    )
};

export default ListItem;
