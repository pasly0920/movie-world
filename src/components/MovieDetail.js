import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../module/MovieDetail.module.css";

function MovieDetail({ props }) {
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  function onClick() {
    navigate(`/thumbnail${props.poster_path}`);
  }
  return (
    <div>
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
              <span className={style.spanKey}>개봉 </span>
              <span>
                {props.release_date.replace("-", ".").replace("-", ".")}
              </span>
              <br />
              <span className={style.spanKey}>장르 </span>
              <span>
                {props.genres.map((item, idx) =>
                  idx !== props.genres.length - 1 ? item.name + "/" : item.name
                )}
              </span>
              <br />
              <span className={style.spanKey}>국가 </span>
              <span>
                {new Intl.DisplayNames(["KO"], {
                  type: "region",
                }).of(props.production_countries[0].iso_3166_1)}
              </span>
              <br />
              <span className={style.spanKeyS}>러닝타임</span>
              <span>{props.runtime + "분"}</span>
              <br />
            </div>
            <div className={style.rightDetail}>
              <span className={style.spanKey}>평점 </span>
              <span>
                {props.vote_average} {` (${props.vote_count})`}
              </span>
              <br />
              <span className={style.spanKey}>예산 </span>
              <span>{getKoreanNumber(props.budget * 1200)}</span>
              <br />
              <span className={style.spanKey}>수익 </span>
              <span>
                {getKoreanNumber(parseInt(props.revenue / 1000) * 1000 * 1200)}
              </span>
              <br />
            </div>
          </div>
          <div className={style.homepageDiv}>
            <span
              className={style.homepage}
              onClick={() => window.open(props.homepage, "_blank")}
            >
              🔗홈페이지
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={style.tabmenuWrapper}>
          <div
            onClick={() => {
              setNum(0);
            }}
            className={num === 0 ? style.on : null}
          >
            주요 정보
          </div>
          <div
            onClick={() => setNum(1)}
            className={num === 1 ? style.on : null}
          >
            제작 정보
          </div>
          <div
            onClick={() => setNum(2)}
            className={
              (num === 2 ? style.on : null) +
              (props.belongs_to_collection === null ? style.hidden : "")
            }
          >
            {props.belongs_to_collection === null ? "" : "관련 정보"}
          </div>
        </div>
        <div className={style.tabContent}>
          <div className={num !== 0 ? style.hidden : null}>
            {props.overview.split(". ").map((item, idx) => (
              <span key={idx}>
                {`${item}. `}
                <br />
              </span>
            ))}
          </div>
          <div className={num !== 1 ? style.hidden : style.contentMake}>
            {props.production_companies.map((item) => (
              <div key={item.id}>
                <img
                  src={
                    item.logo_path !== null
                      ? `https://image.tmdb.org/t/p/original${item.logo_path}`
                      : null
                  }
                  alt=""
                />
                <span className={style.productionCompany}>
                  {item.name}
                  <br />
                </span>
              </div>
            ))}
          </div>
          <div className={num !== 2 ? style.hidden : null}>
            {
              <img
                className={style.relatedImg}
                src={
                  props.belongs_to_collection === null
                    ? null
                    : `https://image.tmdb.org/t/p/original${props.belongs_to_collection.poster_path}`
                }
                alt=""
              />
            }
            {props.belongs_to_collection === null ? (
              <span>None</span>
            ) : (
              <span className={style.productionCompany}>
                {props.belongs_to_collection.name}
              </span>
            )}
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
