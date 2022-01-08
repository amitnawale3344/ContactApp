import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header.js";
import ContactList from "./ContactList.js";
import AddContact from "./AddContact.js";
import ContactDetails from "./ContactDetails";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "key_contacts";
  const [contacts, setContacts] = useState([]);
  const history = createBrowserHistory();
  history.push();
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response]);
  };

  //get data from json-server
  const getContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    // const locallyStoredContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // setContacts(locallyStoredContacts);

    //define the function
    const getAllContacts = async () => {
      const allContacts = await getContacts();
      if (allContacts) setContacts(allContacts);
    };
    //call the function
    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = async (id) => {
    console.log(id);
    await api.delete("/contacts/" + id);
    const newContacts = contacts.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newContacts);
  };

  const editContactHandler = async (contact) => {
    console.log(contact);
    const response = await api.put("/contacts/" + contact.id, contact);
    setContacts([...contacts, response]);
  };

  return (
    <div className="ui container">
      <Router history={history}>
        <Header />

        <Routes>
          <Route
            path="/add"
            element={
              <AddContact
                addContactHandler={addContactHandler}
                history={history}
              />
            }
          ></Route>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                removeContact={removeContactHandler}
                history={history}
              />
            }
          ></Route>
          <Route
            path="/contact/:id"
            element={<ContactDetails></ContactDetails>}
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <EditContact
                editContact={editContactHandler}
                history={history}
              ></EditContact>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
