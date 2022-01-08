import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user-avatar.svg";
const ContactCard = (props) => {
  const location = useLocation();
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user"></img>
      <div className="content">
        <Link to={"/contact/" + `${id}`} state={{ ...props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "0px",
          marginLeft: "10px",
        }}
        onClick={() => props.removeContact(id)}
      ></i>
      <Link
        to={"/edit/" + `${id}`}
        state={{ ...props.contact }}
        style={{
          display: "table-cell",
        }}
      >
        <i
          className="edit alternate outline icon"
          style={{
            color: "blue",
            marginTop: "0px",
            marginLeft: "2px",
          }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
