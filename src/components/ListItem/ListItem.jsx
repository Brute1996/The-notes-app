import { useContext, useEffect, useRef } from "react";
import api from "../api";
import {ListItemStyle, ListStyle} from "./ListItem.styled";
import { NotesContext } from "../App";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";


const { noteTitle, noteBody } = api.fieldsNamesId;

const dsiplayDateOfItem = (createdAtDate) => {
    const dateNow = new Date().toISOString();
    const createdAtDateMMDDYYFormat = moment(createdAtDate).format('MM/DD/YY');

        
    if (moment(dateNow).format('MM/DD/YY') === createdAtDateMMDDYYFormat) {
        return moment(createdAtDate).format('h:mm A');
    } else {
        return createdAtDateMMDDYYFormat;
    }
};


const ListItem = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedNote])

    const handleClick = (noteId) => {
        setSelectedNote(notes.find(({ id }) => id === noteId))
    }

    const filteredNotes = () => {
        const normlizeQuery = searchQuery.toLowerCase();

        return notes.filter((note) => {
            if (!note.values[noteTitle]) {
                note.values[noteTitle] = "";
            } else if (!note.values[noteBody]) {
                note.values[noteBody] = "";
            }
            

            if (note.values[noteTitle].toLowerCase().includes(normlizeQuery)
                ||
                note.values[noteBody].toLowerCase().includes(normlizeQuery)
            ) {
                return true;
            } else {
                return false;
            }
        });
    };




    return (
        <ListStyle>
            {filteredNotes().map(({ values, created_at, id, editMode }, index) =>
                <ListItemStyle
                    style={{ backgroundColor: selectedNote?.id === id ? "rgba(0,0,0,0.1" : "" }}
                    onClick={() => handleClick(id, index)}
                    key={id}
                    ref={(ref) => notesRefs.current[index] = ref}>
                    <h2 className="note-short-title">{values[noteTitle]}</h2>
                    <div className="note-item-info">
                        {editMode ? <FaRegEdit className="edit-mode-icon" /> : null}
                        <time dateTime={created_at} className="time-created">{dsiplayDateOfItem(created_at)}</time>
                        <p className="note-short-text">{values[noteBody]}</p>
                    </div>
                </ListItemStyle>)}
        </ListStyle>
    )
};

export default ListItem;
