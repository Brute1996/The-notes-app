import axios from "axios";

const API_KEY = "cTWPPWWOjcW7mKhCojnhvC";

const fieldsNamesId = {
  noteTitle: "cOnqqUCJndSyk5fJhdSCkU",
  noteBody: "cug8k_DCjkiykNWQhcSCkv",
  entity_id: "bKW49eWQzkhioff8kkWPif",
};

const getNotes = async () => {
  try {
    const { data } = await axios.get(
      "https://quintadb.com/apps/ckW7JcKWfemyohW4HThSkA/dtypes/entity/bKW49eWQzkhioff8kkWPif.json?rest_api_key=cTWPPWWOjcW7mKhCojnhvC&amp;view="
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

const createNote = async (note) => {
  const { noteTitle, noteBody, entity_id } = fieldsNamesId;

  const reqBody = {
    rest_api_key: API_KEY,

    values: {
      entity_id,
      id: note.id,
      [noteTitle]: " ",
      [noteBody]: " ",
    },
  };

  try {
    const { data } = await axios.post(
      "https://quintadb.com/apps/ckW7JcKWfemyohW4HThSkA/dtypes.json?rest_api_key=cTWPPWWOjcW7mKhCojnhvC",
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

const deleteNote = async (noteIdToDelete) => {
  try {
    const { data } = await axios.delete(
      `https://quintadb.com/apps/ckW7JcKWfemyohW4HThSkA/dtypes/${noteIdToDelete}.json?rest_api_key=cTWPPWWOjcW7mKhCojnhvC`
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};

const updateNote = async (noteIdToUpdate, note) => {
  const reqBody = {
    rest_api_key: API_KEY,
    values: { ...note.values },
  };

  try {
    const { data } = await axios.put(
      `https://quintadb.com/apps/ckW7JcKWfemyohW4HThSkA/dtypes/${noteIdToUpdate}.json?rest_api_key=cTWPPWWOjcW7mKhCojnhvC`,
      reqBody
    );
    return data;
  } catch (error) {
    console.log("Something is wrong: " + error);
  }
};
const api = {
  API_KEY,
  fieldsNamesId,
  getNotes,
  createNote,
  deleteNote,
  updateNote,
};

export default api;
