import { useNavigate } from "react-router-dom";
import style from "../module/MovieDetail.module.css";

function MovieDetail({ props }) {
  const navigate = useNavigate();
  function onClick() {
    navigate(`https://image.tmdb.org/t/p/original${props.poster_path}`, {
      replace: true,
    });
  }
  return (
    <div className={style.baseBox}>
      <div className={style.imgBox}>
        <img
          className={style.thumb_img}
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt=""
          onClick={onClick}
        />
      </div>
      <div className={style.simpleDetail}>
        <span className={style.mainTitle}>{props.title}</span>
        <br />
        <span>
          {props.original_title}
          {"   "}
          {props.hasOwnProperty("release_date")
            ? `, ${props.release_date.slice(0, 4)}`
            : null}
        </span>
        <div className={style.moreDetail}>
          <div>
            <span>개봉 </span>
            <span>
              {props.release_date.replace("-", ".").replace("-", ".")}
            </span>
            <br />
            <span>장르 </span>
            <span>
              {props.genres.map((item, idx) =>
                idx !== props.genres.length - 1 ? item.name + "/" : item.name
              )}
            </span>
            <br />
            <span>국가 </span>
            <span>
              {new Intl.DisplayNames(["KO"], {
                type: "region",
              }).of(props.production_countries[0].iso_3166_1)}
            </span>
            <br />
            <span>러닝타임 </span>
            <span>{props.runtime + "분"}</span>
            <br />
          </div>
          <div className={style.rightDetail}>
            <span>평점 </span>
            <span>
              {props.vote_average} {` (${props.vote_count})`}
            </span>
            <br />
            <span>예산 </span>
            <span>{getKoreanNumber(props.budget * 1200)}</span>
            <br />
            <span>수익 </span>
            <span>
              {getKoreanNumber(parseInt(props.revenue / 1000) * 1000 * 1200)}
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

function getKoreanNumber(number) {
  const koreanUnits = ["", "만", "억", "조"];
  let answer = "";
  let unit = 10000;
  let index = 0;
  let division = Math.pow(unit, index);

  while (Math.floor(number / division) > 0) {
    const mod = Math.floor((number % (division * unit)) / division);
    if (mod) {
      const modToString = mod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
      answer = `${modToString}${koreanUnits[index]}` + answer;
    }
    division = Math.pow(unit, ++index);
  }
  return answer;
}

export default MovieDetail;
