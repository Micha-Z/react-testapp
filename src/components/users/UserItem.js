import React from "react";
import PropTypes from "prop-types";

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
        <a
          target="_blank"
          href={html_url}
          onClick={checkUrl}
          className="bn btn-dark btn-sm my-1"
        >
          Click me
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
