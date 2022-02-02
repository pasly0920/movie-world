import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Nav from "../components/Nav";
import SearchRes from "../components/SearchRes";
import "../module/search.scss";

const API_KEY = "44bdfee0884e28413456af783c0fecc0";

function Search() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState([]);
  const [pageTotal, setPageTotal] = useState(1);
  const [ref, inView] = useInView();

  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko&query=${encodeURI(
          name
        )}&page=${page}`
      )
    ).json();
    console.log(json);
    setDetail(json);
    setPageTotal(json.total_page);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, [name, page]);

  return (
    <div>
      <Nav />
      <div className="keywordContainer">
        <span className="searchKeyword">{`'${name}' 검색결과`}</span>
      </div>
      {loading ? null : <SearchRes res={detail.results} viewControl={ref} />}
    </div>
  );
}
export default Search;
