import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

const api_key = "44bdfee0884e28413456af783c0fecc0";
const sort_by = "popularity.desc";

function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ko&sort_by=${sort_by}&vote_count.gte=1000`
      )
    ).json();
    setMovies(json.results.slice(0, 10));
    console.log(json.results);
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
      {loading ? (
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          interval={2000}
          centerMode={true}
          centerSlidePercentage={66}
          autoFocus={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={true}
          width="100vw"
          onClickItem={(idx, id) => {
            navigate(`movie/${id.key}`);
          }}
        >
          {movies.map((item, index) => (
            <div key={item.id}>
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + item.backdrop_path
                }
                alt=""
                title={item.title}
              />
            </div>
          ))}
        </Carousel>
      ) : null}
    </div>
  );
}
export default Home;
