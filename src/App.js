import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/Movie-Database-Application" element={<Home />} />
            <Route
              path="/Movie-Database-Application/movie/:imdbID"
              element={<MovieDetails />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
