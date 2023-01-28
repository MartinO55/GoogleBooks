import React from "react";
import styles from "./Card.module.scss";
import coverPlaceHolder from "../../assets/book-cover-placeholder.png";

const Card = ({ title, author, description, image }) => {
  //console.log(books);

  if (!title) {
    title = "No title for this book found";
  }

  if (!author) {
    author = "No Author recorded";
  }

  if (!description) {
    description = "No description recorded";
  }

  if (!image) {
    image = coverPlaceHolder;
  }

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
