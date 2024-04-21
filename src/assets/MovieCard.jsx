
import React from "react";
import "./movieCard.css";

const MovieCard = ({ movieProp }) => {
    return (
        <div className="movie-card">
            <img
                src={
                    movieProp.Poster
                        ? movieProp.Poster
                        : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolorkit.co%2Fcolor%2F0f0f0f%2F&psig=AOvVaw3DuMX6abBpEfpoi1aTW4YH&ust=1713823497874000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiUgZao1IUDFQAAAAAdAAAAABAE"
                }
                alt={
                    movieProp.Poster
                        ? movieProp.Poster
                        : "No link"
                }
            />
            <div className="movie-card-content">
                <h3 className="movie-card-title">{movieProp.Title}</h3>
                <span className="movie-card-year">{movieProp.Year}</span>
            </div>
        </div>
    );
};

export default MovieCard;
