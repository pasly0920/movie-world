import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Nav from "../components/Nav";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const api_key = "44bdfee0884e28413456af783c0fecc0";

  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=ko`
      )
    ).json();
    console.log(json);
    setDetail(json);
    setLoading(true);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <Nav />
      {loading ? <MovieDetail props={detail} /> : null}
    </div>
  );
}
export default Detail;

//제목, 포스터, 시리즈물인지, 장르, 홈페이지, 시놉시스, 제작사, 제작국,
// 제목 아래의 시그니처 문구, 평점, 출시일, 수익, 런타임, 장르
