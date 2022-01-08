import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditContact = (props) => {
  console.log("EditContact Contact=============>");

  const location = useLocation();
  const [state, setState] = useState(location.state ? location.state : {});

  console.log(location);

  const onChangeEventHandler = (e) => {
    if (e.target.name === "name") {
      setState({ id: state.id, name: e.target.value, email: state.email });
      //setName(e.target.value);
    }
    if (e.target.name === "email")
      setState({ id: state.id, name: state.name, email: e.target.value });
  };
  const update = (e) => {
    e.preventDefault();

    props.editContact(state);
    props.history.push("/");
    window.location.href = window.location.href;
  };

  return (
    <div className="ui main">
      <h2 className="ui header">Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={onChangeEventHandler}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={onChangeEventHandler}
          />
        </div>
        <button className="ui button blue">Edit Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
