import { useState } from "react";
import style from "../module/Nav.module.css";

function Nav() {
  const [focus, setFocus] = useState("Search..");
  const [value, setValue] = useState("");
  function submit(event) {
    event.preventDefault();
    if (value.length > 0) console.log(value);
  }
  function onfocus() {
    setFocus("Search movie");
  }
  function onblur() {
    setFocus("Search...");
  }
  function onchange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={style.Nav}>
      <h2>Movie World</h2>
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
  );
}
// backdrop 전체
// poster 세로 길이
export default Nav;
