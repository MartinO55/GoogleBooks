import React from "react";

const Card = ({ title, author, description, image }) => {
  //console.log(books);

  if (title === undefined) {
    return (
      <>
        <p>loading ...</p>
      </>
    );
  } else return <>{<div>{title}</div>}</>;
};

export default Card;
