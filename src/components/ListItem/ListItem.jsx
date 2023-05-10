import { useContext, useEffect, useRef } from "react";
import api from "../api";
import {ListItemStyle, ListStyle} from "./ListItem.styled";
import { NotesContext } from "../App";
import { innerTextFormater } from "../../helpers/helpers";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";


const { noteTitle, noteBody } = api.fieldsNamesId;


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
    }, [selectedNote])

    const handleClick = (noteId) => {
        setSelectedNote(notes.find(({ id }) => id === noteId))
    }

    const filteredNotes = () => {
        const normlizeQuery = searchQuery.toLowerCase();

        return notes.filter((note) => {
            if (!note.values[noteTitle]) {
                note.values[noteTitle] = "";
                note.values[noteBody] = "";
            }
            
            return note.values[noteTitle].toLowerCase().includes(normlizeQuery)

        });
    };


    const dsiplayDateOfItem = (createdAtDate) => {
        const dateNow = new Date().toISOString();
        const createdAtDateMMDDYYFormat = moment(createdAtDate).format('MM/DD/YY');

        
        if (moment(dateNow).format('MM/DD/YY') === createdAtDateMMDDYYFormat) {
            return moment(createdAtDate).format('h:mm A');
        } else {
            return createdAtDateMMDDYYFormat;
        }
    }

    const showEditModeIcon = (editMode) => {
        return (
            editMode
                ?
                <FaRegEdit className="edit-mode-icon" />
                : null
        )
    };

    return (
        <ListStyle>
            {filteredNotes().map(({ values, created_at, id, editMode }, index) =>
                <ListItemStyle
                    style={{ backgroundColor: selectedNote?.id === id ? "rgba(0,0,0,0.1" : "" }}
                    onClick={() => handleClick(id, index)}
                    key={id}
                    ref={(ref) => notesRefs.current[index] = ref}>
                    <h2 className="note-short-title">{innerTextFormater(20, values[noteTitle])}</h2>
                    <div className="note-item-info">
                        {showEditModeIcon(editMode)}
                        <time dateTime={created_at} className="time-created">{dsiplayDateOfItem(created_at)}</time>
                        <p className="note-short-text">{innerTextFormater(20, values[noteBody])}</p>
                    </div>
                </ListItemStyle>)}
        </ListStyle>
    )
};

export default ListItem;
