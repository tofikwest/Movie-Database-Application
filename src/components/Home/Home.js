import "./Home.scss";
import { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShow,
} from "../../features/movies/movieSlice";

const Home = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShow());
  }, [dispatch]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchAsyncMovies(searchMovie));
  };
  const onChange = (event) => {
    setSearchMovie(event.target.value);
  };

  return (
    <div>
      <div className="banner-img"></div>
      <form onSubmit={onHandleSubmit}>
        <div className="search-icon">🔎</div>
        <label>
          <input
            className="inputSearch"
            type="text"
            value={searchMovie}
            onChange={onChange}
            placeholder="Search your movies"
          />
        </label>
      </form>
      <MovieListing />
    </div>
  );
};

export default Home;
