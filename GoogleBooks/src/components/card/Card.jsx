import React from "react";
import styles from "./Card.module.scss";

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
          <div className={styles.Card}>
            <h3>{title}</h3>
            <p>{author}</p>
            {/* <p>{description}</p> */}
            <img src={image.smallThumbnail} />
          </div>
        }
      </>
    );
};

export default Card;
