import { Box, createTheme, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import FilmCard from "./FilmCard";
import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@emotion/react";
import './TopFlimSlide.css'

function TopFilmSlide({movies}) {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1105,
          },
        },
      })}
    >
    <Typography className="trending-title">
        Trending now
    </Typography>
      <Box sx={{ flexGrow: 1,paddingLeft: '12px',paddingRight: '12px' }}>
        <Grid container spacing={2}>
        {movies?.slice(0,6).map((movie) => (
            <Grid key={movie.id} size={{ laptop: 4, tablet: 4, mobile: 4, desktop: 2 }}>
              <FilmCard  movie={movie}/>
            </Grid>
          ))}
        </Grid>
        /
      </Box>
    </ThemeProvider>
  );
}

export default TopFilmSlide;
