
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CarouselFilm.css'
import poster from '../image/movie-poster.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function CarouselFilm({movies,buttonContent}) {
  const movie=movies;

  const SOURCE_PIC=' https://image.tmdb.org/t/p/original';
  const imageAdd=SOURCE_PIC+movie?.backdrop_path ;
  console.log("carosel",imageAdd);
  let location = useLocation();
  console.log(movie?.id,"movie id")
  return (
    <div className='film-container'>
    <Card className='carousel-film-container'>
      <CardMedia
        sx={{ height: 140 }}
        image={imageAdd}
        title="green iguana"
        id='image-background'
      >
      <div className='card-content-container'>
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div" className='content film-tittle'>
          {movie?.title}
        </Typography>
        <Typography variant="body2" className='content film-des flim-des-4'>
          {movie?.overview}
       </Typography>
      </CardContent>
      <CardActions>
        <Button  
        className='button-red'
        sx={{ mt: 1 }}
        component={Link}
        to={`/movie/${movie?.id}`}
        state={{ backgroundLocation: location }}
        >{buttonContent}</Button>
      </CardActions>
      </div>
      </CardMedia>
    </Card>
    </div>
  );
}
