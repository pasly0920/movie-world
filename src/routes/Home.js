import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { Carousel } from "react-responsive-carousel";

const api_key = "44bdfee0884e28413456af783c0fecc0";
const sort_by = "popularity.desc";

function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ko&sort_by=${sort_by}&vote_count.gte=1000`
      )
    ).json();
    setMovies(json.results);
    setLoading(true);
  };
  //rating = use discover
  //find = use discover with_keyword
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Nav />
      {loading ? <Carousel></Carousel> : null}
    </div>
  );
}
export default Home;
