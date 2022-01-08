import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/users-avatag-icon.jpg";

const ContactDetails = (props) => {
  const location = useLocation();

  const { name, email } = location.state ? location.state : {};

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue centered">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
