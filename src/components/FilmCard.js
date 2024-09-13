import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import poster from "../image/movie-poster.jpg";
import { Link, useLocation } from "react-router-dom";

export default function FilmCard({ movie }) {
  let location = useLocation();
  const SOURCE_PIC = " https://image.tmdb.org/t/p/original";
  const imageAdd = SOURCE_PIC + movie?.poster_path;
  console.log("image add", imageAdd);
  const title = movie ? movie.title : "Minion";
  return (
    <Card
      sx={{ maxWidth: 400, borderRadius: "6px" }}
      className="card-container"
      component={Link}
      to={`/movie/${movie.id}`}
      state={{ backgroundLocation: location }}
    >
      <CardMedia
        sx={{ height: "22vh" }}
        image={movie ? imageAdd : poster}
        title={title}
      />
    </Card>
  );
}
