import axios from "axios";

const API_KEY = "dcQg7dUSjak4kCWPfoW6rQ";

const fieldsNamesId = {
  noteTitle: "baWQ4ImmjjnOkmWQddQrel",
  noteBody: "ddNZ1AB8ngWOJcICkNWQOq",
  entity_id: "bjg8krW4rlyiovaSoTj8kb",
};

const getNotes = async () => {
  try {
    const { data } = await axios.get(
      `https://quintadb.com/apps/b-W5LoW7ThoOk9A2FdGSoG/dtypes/entity/bjg8krW4rlyiovaSoTj8kb.json?rest_api_key=${API_KEY}&amp;per_page=100`
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
      `https://quintadb.com/apps/b-W5LoW7ThoOk9A2FdGSoG/dtypes.json?rest_api_key=${API_KEY}`,
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
      `https://quintadb.com/apps/b-W5LoW7ThoOk9A2FdGSoG/dtypes/${noteIdToDelete}.json?rest_api_key=${API_KEY}`
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
      `https://quintadb.com/apps/b-W5LoW7ThoOk9A2FdGSoG/dtypes/${noteIdToUpdate}.json?rest_api_key=${API_KEY}`,
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
