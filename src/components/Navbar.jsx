import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()



  return (
      <>
        <div className="navbar">
          <div className="navbar__box">
            <h3 className="navbar__title">Power<br/>Shopping</h3>
            <div className="navbar__box">
              {/* todo - navigate url 바꾸기 */}
              {/* todo - button 디자인 바꾸기 */}
              {/* todo - 자동 접기 or 접기 버튼 추가 */}
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}>쇼핑검색</button>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}>장바구니</button>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}>설정</button>
            </div>
          </div>
        </div>
        
      </>
  )
}