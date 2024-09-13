import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./App.css";
import CarouselFilm from "./components/CarouselFilm";
import FilmCard from "./components/FilmCard";
import MovieList from "./components/MovieList";
import MoviePaging from "./components/MoviePaging";
import Title from "./components/Title";
import TopFilmSlide from "./components/TopFilmSlide";

import HeaderLogged from "./layouts/HeaderLogged";
import MainHeader from "./layouts/MainHeader";
import DetailPage from "./pages/DetailPage";
import Homes from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
