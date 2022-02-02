import { useNavigate } from "react-router-dom";

function SearchRes({ res, viewControl }) {
  const navigate = useNavigate();
  const genreList = {
    28: "액션",
    12: "어드벤쳐",
    16: "애니메이션",
    35: "코미디",
    80: "범죄",
    99: "다큐멘터리",
    18: "드라마",
    10751: "가족",
    14: "판타지",
    36: "역사",
    27: "공포",
    10402: "음악",
    9648: "미스터리",
    10749: "로맨스",
    878: "SF",
    10770: "TV 영화",
    53: "스릴러",
    10752: "전쟁",
    37: "서구",
  };
  return (
    <div className="movieList">
      {res.map((item) => (
        <div key={item.id} className="movie">
          <div
            className="imgContainer"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            <img
              src={
                item.poster_path === null
                  ? "https://t1.daumcdn.net/movie/movie2020/pc/ico_noimage.png"
                  : `https://image.tmdb.org/t/p/original${item.poster_path}`
              }
              alt=""
            />
          </div>
          <div className="textContainer">
            <span className="title">{item.title}</span>
            <br />
            <span className="originalTitle">{item.original_title}</span>
            <br />
            <br />
            <span className="key">제작 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="releaseDate">
              {item.hasOwnProperty("release_date")
                ? item.release_date.slice(0, 4)
                : "-"}
            </span>
            <br />
            <span className="key">장르 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="genres">
              {item.genre_ids.map((it, idx) =>
                idx !== item.genre_ids.length - 1
                  ? `${genreList[it]}, `
                  : `${genreList[it]}`
              )}
            </span>
            <br />
            <span className="key">평점 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="star">
              {item.vote_average === 0 ? "-" : item.vote_average}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchRes;
