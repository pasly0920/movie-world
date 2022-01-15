import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import style from "../module/Thumbnail.module.css";

function Thumbnail() {
  const { poster_path } = useParams();
  return (
    <div className={style.outer}>
      <div className={style.imgDiv}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className={style.thumbnail}
        />
      </div>
    </div>
  );
}
export default Thumbnail;
