import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goMain = () => navigate("/");
  return (
    <div className="Errorcontainer">
      <div className="main">
        <span>Error 404</span>
      </div>
      <div className="errorDetail">
        <span className="Main">
          죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
        </span>
        <br />
        <span className="Sub1">
          존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경
          삭제되어 찾을 수 없습니다.
        </span>
        <br />
        <span className="Sub2">
          궁금하신 점이 있으시면 언제든 문의해주시기 바랍니다.
        </span>
      </div>
      <div className="buttonContainer">
        <div className="mainPage" onClick={goMain}>
          <span>메인으로</span>
        </div>
        <div className="back" onClick={goBack}>
          <span>이전 페이지</span>
        </div>
      </div>
    </div>
  );
}
export default Notfound;
