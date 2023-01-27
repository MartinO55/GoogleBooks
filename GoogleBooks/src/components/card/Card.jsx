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
        {console.log(books)}
        <div>{}</div>
      </>
    );
};

export default Card;
