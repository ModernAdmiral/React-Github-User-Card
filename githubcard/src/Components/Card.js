import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.img} />
      {/* <h1 className="name">{props.name}</h1> */}
      <div className="card-info">
        <h2 className="username">{props.username}</h2>

        <p>Location: {props.location}</p>
        <p>Profile: {props.profile}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );
};

export default Card;
