import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import apiService from "../app/apiService";
import MoviePaging from "../components/MoviePaging";
import TopFilmSlide from "../components/TopFilmSlide";
import CarouselFilm from "../components/CarouselFilm";
import MovieList from "../components/MovieList";

function Homes() {
  const [pagesTotal, setPagesTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  // useEffect(()=>{
  //   const totalGetJobs=5;
  //   const startGetJobs=page*5-5;
  //   console.log(jobsList[startGetJobs])
  //   console.log(startGetJobs+"start");
  //   setJobs(jobsList.slice(startGetJobs,totalGetJobs+startGetJobs));

  // },[page])
  const handleChange = (event, value) => {
    console.log(value + "value");
    setPage(value);
  };
  console.log(page, " pages");
  useEffect(() => {
    const fetch = async () => {
    const res = await apiService.get(`/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=${page}`);
    console.log("this ",res, "this respone");
    setPagesTotal(res.data.total_pages);
    setMovies(res.data.results)
    console.log(movies,"get movies")
    };
    fetch();
  }, [page]);
  useEffect(() => {
    const fetch = async () => {
    const res = await apiService.get("/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1");
    console.log(res, "top respone");
    setTopMovies(res.data.results)
    };
    fetch();
  }, [page]);
  return (
    <>
      <CarouselFilm movies={movies?.slice(10,11)[0]} buttonContent={'Learn more about movie'}/>
      <TopFilmSlide movies={topMovies}/>
      <MovieList movies={movies}/>
      <MoviePaging count={pagesTotal} onChange={handleChange} />
    </>
  );
}

export default Homes;
