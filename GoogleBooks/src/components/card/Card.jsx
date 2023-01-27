import React from "react";

const Card = ({ title, author, description, image }) => {
  //console.log(books);

  if (title === undefined) {
    return (
      <>
        <p>loading ...</p>
      </>
    );
  } else
    return (
      <>
        {
          <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{description}</p>
            <img src={image.smallThumbnail} />
          </div>
        }
      </>
    );
};

export default Card;
