import { Stack } from "@mui/material";
import React from "react";
import Poster from "./Poster";

const MovieRow = ({ movies }) => {
  return (
    <Stack
      className="card-row"
      direction="row"
      sx={{ overflowX: "auto", overflowY: "hidden" }}
    >
      {movies.map((movie) => (
        <Poster key={movie.id} movie={movie} />
      ))}
    </Stack>
  );
};

export default MovieRow;
