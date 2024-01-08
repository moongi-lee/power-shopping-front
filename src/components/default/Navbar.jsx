import {Link, useNavigate} from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { PiBrain } from "react-icons/pi";

export default function Navbar() {
  const navigate = useNavigate()
  return (
      <>
        <div className="navbar">
          <div className="navbar__box">
              {/* todo - navigate url 바꾸기 */}
              {/* todo - 자동 접기 or 접기 버튼 추가 */}
              <button className="navbar__box__button btn-active" onClick={()=>{navigate("/")}}><RxMagnifyingGlass /></button>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}><BsCart2 /></button>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}><PiBrain /></button>
              <div className="invisible_box-nav"></div>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}><MdAccountCircle /></button>
              <button className="navbar__box__button" onClick={()=>{navigate("/")}}><IoSettingsOutline /></button>
          </div>
        </div>
      </>
  )
}