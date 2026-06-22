import React from "react";
import "./first.css";

function First({title, body, imgUrl, author}) {
  return (
    <div className="post">
      <img src={imgUrl} alt={title} />

      <h2>{title}</h2>

      <p>{body}</p>

      <h4>Written by: {author}</h4>
    </div>
  );
}

export default First;