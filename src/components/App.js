import { useEffect, useState } from "react";
import api from "./api";
import { createContext } from "react";
import AppWrapper from "./App.styled";
import Header from "./Header/Header";
import Main from "./Main/Main";

export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteRef, setSelectedNoteRef] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    api
      .getNotes()
      .then(({ records }) => {
        setNotes(
          records.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoaded(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        searchQuery,
        selectedNoteRef,
        setSelectedNote,
        setNotes,
        setSelectedNoteRef,
        setSearchQuery,
      }}
    >
      <AppWrapper>
        <Header />
        <Main isLoaded={isLoaded} />
      </AppWrapper>
    </NotesContext.Provider>
  );
}

export default App;
