import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log("Add Contact");

  const add = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter data for all fields.");
      return;
    }

    props.addContactHandler({ name: name, email: email });
    setName("");
    setEmail("");
    props.history.push("/");
    window.location.href = window.location.href;
  };

  return (
    <div className="ui main">
      <h2 className="ui header">Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
