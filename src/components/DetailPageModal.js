import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarouselFilm from "./CarouselFilm";
import './DetailPageModel.css'
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../app/apiService";

function DetailPageModal({movieDetail}) {
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "black",
    border:'none',
    borderRadius: 3,
    width: '70vw'
  };
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [creator, setCreator] = useState();
  const handleClose = () => {
    navigate(-1);
  };
  useEffect(()=>{
    const fetchData = async () => {
      const res = await apiService.get(`movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`);
      const resCast = await apiService.get(`/movie/${id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`);
      console.log("deyial",resCast.data);
      setMovie(res.data);
      console.log("detail123",movie)
      setCast(resCast.data.cast.slice(0,10))
      setCreator(resCast.data.crew.slice(0,10))
    };
    fetchData();
  
  },[])
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} id="box-container">
        <CarouselFilm movies={movie} buttonContent={'Back to list'}></CarouselFilm>
        <div className="container">
          <div className="short-information">
            <Typography className="year">{movie?.release_date}</Typography>
            { console.log("detail123",movie)}
            {movie?.adult?(<div className="age-18">18+ </div>):(<div className="age">R</div>)}
           
            <div className="company">{movie?.production_companies.slice(0,1)[0].name}</div>
          </div>
          <Typography className="starring">
            <span>Starring: </span>
            {cast?.map(castde=>(
              castde.name
            ))}
          </Typography>
          <Typography className="creator">
            <span>Creator: </span>
            {creator?.map(castde=>(
              castde.name
            ))}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}

export default DetailPageModal;
