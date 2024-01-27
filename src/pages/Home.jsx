import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";
import CUSTOM from "../config/customizable";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h3>Top Picks For You</h3>
          </div>
          <MovieList category={category.movie} type={movieType.now_playing} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h3>New on {CUSTOM.title}</h3>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h3>Binge-Worthy TV Series</h3>
          </div>
          <MovieList category={category.tv} type={tvType.airing_today} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h3>Top Searches</h3>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
