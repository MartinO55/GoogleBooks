import React from "react";

const Card = ({ books }) => {
  //console.log(books);

  if (books === undefined) {
    return (
      <>
        <p>loading ...</p>
      </>
    );
  } else
    return (
      <>
        <div>{}</div>
      </>
    );
};

export default Card;
