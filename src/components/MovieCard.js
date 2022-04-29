import React from "react";
import noImage from "../utils/no-image-available.png";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsPlusLg,
  BsXLg
} from "react-icons/bs";
import useToggle from "../hooks/useToggle";
const MovieCard = ({
  posterUrl,
  title,
  year,
  isFavesList,
  code,
  eventHandler,
  movie
}) => {
  const [isDefault, toggle] = useToggle();
  const dropDownStyles = {
    transition: "all 200ms ease-in",
    opacity: isDefault ? "0" : "1"
  };
  return (
    <div className="movie-card">
      {posterUrl === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={posterUrl} alt={title} />
      )}

      <footer className="movie-card-content">
        <div>
          <p>{title}</p>
          <p>{year}</p>
        </div>
        <div className="favorite-icon" onClick={() => eventHandler(movie)}>
          {isFavesList ? <BsXLg /> : <BsPlusLg />}
        </div>
      </footer>
      <div className="movie-card-drop-down">
        <div className="movie-card-drop-down-btn" onClick={toggle}>
          {isDefault ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
        </div>
        <div className="movie-card-drop-down-label" style={dropDownStyles}>
          <p>IMDB CODE: {code} </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
