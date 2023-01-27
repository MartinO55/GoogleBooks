import React from "react";

const Card = ({ books }) => {
  //console.log(books);

  if (books === undefined) {
    return (
      <>
        <p>loading ...</p>
      </>
    );
  } else return <>{/* <div>{books.map()}</div> */}</>;
};

export default Card;
