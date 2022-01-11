import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../module/Nav.module.css";

function Nav() {
  const [focus, setFocus] = useState("        Search...");
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (value.length > 0) console.log(value);
    navigate(`/search/${value}`, { replace: true });
  }
  function onfocus() {
    setFocus("  Search movie");
  }
  function onblur() {
    setFocus("        Search...");
  }
  function onchange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={style.Nav}>
      <Link to="/">
        <h2>Movie World</h2>
      </Link>

      <div className={style.child}>
        <Link to="/topRated" className="sp">
          <h3>Top rated</h3>
        </Link>
        <Link to="/genres">
          <h3>Genres</h3>
        </Link>
        <form onSubmit={submit}>
          <input
            value={value}
            placeholder={focus}
            onChange={onchange}
            onFocus={onfocus}
            onBlur={onblur}
          />
        </form>
      </div>
    </div>
  );
}
// backdrop 전체
// poster 세로 길이
export default Nav;
