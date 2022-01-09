import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function Home() {
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=44bdfee0884e28413456af783c0fecc0&language=ko&sort_by=vote_average.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=8&vote_count.gte=10000&with_watch_monetization_types=flatrate"
      )
    ).json();
    console.log(json);
  };
  //rating = use discover
  //find = use discover with_keyword
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Nav />
    </div>
  );
}
export default Home;
