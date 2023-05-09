import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import api from "./api";
import Workspace from "./Workspace/Workspace";
import { createContext } from "react";
import AppWrapper from "./App.styled";
import SearchBox from "./SearchBox/SearchBox";

const testDB = [
  {
    added_by: "centrpopi2@gmail.com",
    app_id: "ckW7JcKWfemyohW4HThSkA",
    approved: false,
    created_at: "2023-05-08T08:56:50.000Z",
    entity_id: "bKW49eWQzkhioff8kkWPif",
    id: "1",
    rel_values: null,
    updated_at: "2023-05-08T08:56:50.000Z",
    user_ids: null,
    values: {
      cOnqqUCJndSyk5fJhdSCkU: "test 1 title ttttttttttttaaaaaaaaaaatewef",
      cug8k_DCjkiykNWQhcSCkv:
        "dfbdfgh dfghdfg hfgh fgh fg jdfgj fghj dfgj fgdj",
    },
  },
  {
    added_by: "centrpopi2@gmail.com",
    app_id: "ckW7JcKWfemyohW4HThSkA",
    approved: false,
    created_at: "2023-05-08T15:56:50.000Z",
    entity_id: "bKW49eWQzkhioff8kkWPif",
    id: "2",
    rel_values: null,
    updated_at: "2023-05-08T11:56:50.000Z",
    user_ids: null,
    values: {
      cOnqqUCJndSyk5fJhdSCkU: "test 2 title",
      cug8k_DCjkiykNWQhcSCkv:
        "dfbdfgh dfghdfg hfgh fgh fg jdfgj fghj dfgj fgdj",
    },
  },
  {
    added_by: "centrpopi2@gmail.com",
    app_id: "ckW7JcKWfemyohW4HThSkA",
    approved: false,
    created_at: "2023-03-08T02:56:50.000Z",
    entity_id: "bKW49eWQzkhioff8kkWPif",
    id: "3",
    rel_values: null,
    updated_at: "2023-05-08T08:16:50.000Z",
    user_ids: null,
    values: {
      cOnqqUCJndSyk5fJhdSCkU: "etetetest 3 title",
      cug8k_DCjkiykNWQhcSCkv:
        "dfbdfgh dfghdfg hfgh fgh fg jdfgj fghj dfgj fgdj",
    },
  },
];

export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [readOnlyToggle, setReadOnlyToggle] = useState(true);
  const [selectedNoteRef, setSelectedNoteRef] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    api
      .getNotes()
      .then(({ records }) =>
        setNotes(
          records.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        )
      );
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        searchQuery,
        setSelectedNote,
        setNotes,
        setSelectedNoteRef,
        setSearchQuery,
      }}
    >
      <AppWrapper>
        <Sidebar
          setReadOnlyToggle={setReadOnlyToggle}
          readOnlyToggle={readOnlyToggle}
        />
        <Workspace
          selectedNote={selectedNote}
          readOnlyToggle={readOnlyToggle}
          selectedNoteRef={selectedNoteRef}
        />
      </AppWrapper>
    </NotesContext.Provider>
  );
}

export default App;
