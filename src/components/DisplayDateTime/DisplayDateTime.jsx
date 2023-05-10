import moment from "moment";
import { useEffect, useState } from "react";

const DisplayDateTime = ({selectedNote}) => {
    const [createdNoteDate, setCreatedNoteDate] = useState('');
    const [currentTime, setCurrentTime] = useState(moment());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!selectedNote) {
            setCreatedNoteDate('')
            return
        };

        setCreatedNoteDate(selectedNote.created_at || "")
        
    }, [selectedNote]);

    
    const displayDate = () => {
        const createNoteDateFormatted = moment(createdNoteDate).format("[note was created] MMM DD, YYYY [at] hh:mm A");

        if (createdNoteDate) {
            return createNoteDateFormatted;
        } else {
            return currentTime.format("[now] MMM DD, YYYY - hh:mm A");
        }

    };


    return (
        <time dateTime={createdNoteDate}>
            {displayDate(createdNoteDate)}
        </time>
    )
};

export default DisplayDateTime;