import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Poster = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie/" + movie.id, { state: { movie: movie } });
  };
  return (
    <div
      onClick={handleClick}
      className="movie-card"
      style={{ minWidth: "15rem" }}
    >
      <LazyLoadImage
        className="movie-poster"
        src={
          "https://image.tmdb.org/t/p/w500" +
          (movie.backdrop_path ?? "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg")
        }
        alt={"https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"}
        effect="blur"
      />
      <CardContent>
        <Typography variant="h7" fontWeight={500} color="white">
          {movie.original_title.length < 40
            ? movie.original_title
            : movie.original_title.slice(0, 20) + "..."}
        </Typography>
      </CardContent>
    </div>
  );
};

export default Poster;
