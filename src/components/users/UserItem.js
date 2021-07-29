import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import User from "./User";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  const checkUrl = () => console.log(html_url);

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="pic"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={html_url}
          onClick={checkUrl}
          className="bn btn-dark btn-sm my-1"
        >
          Click me
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
