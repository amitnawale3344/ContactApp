import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const removeContactHandler = (id) => {
    props.removeContact(id);
  };

  const contacts = [
    {
      id: 1,
      name: "Amit Nawale",
      email: "amitn@gmail.com",
    },
    { id: 2, name: "Anushri Khedekar", email: "anuk@gmail.com" },
  ];
  const renderList = props.contacts.map((item) => {
    return (
      <ContactCard
        contact={item}
        removeContact={removeContactHandler}
        key={item.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};
export default ContactList;
