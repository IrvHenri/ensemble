import React from "react";
import noImage from "../utils/no-image-available.png";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import useToggle from "../hooks/useToggle";
const MovieCard = ({ posterUrl, title, year, code }) => {
  const [isDefault, toggle] = useToggle();

  return (
    <div className="movie-card">
      {posterUrl === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={posterUrl} alt={title} />
      )}

      <footer className="movie-card-content">
        <p>{title}</p>
        <p>{year}</p>
      </footer>
      <div className="movie-card-drop-down">
        <div className="movie-card-drop-down-btn" onClick={toggle}>
          {isDefault ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
        </div>
        {!isDefault && (
          <div className="movie-card-drop-down-label">
            <p>IMDB CODE: {code} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
