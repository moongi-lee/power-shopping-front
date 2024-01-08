import { useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { changeUtilityState } from "../../store";


export default function Navbar() {
  let dispatch = useDispatch();

  const onClick = (e) => {
    let button_list, button;
    if (e.target.tagName === 'path') {
      button_list = e.target.parentElement.parentElement.parentElement.childNodes;
      button = e.target.parentElement.parentElement
    } else if (e.target.tagName === 'svg') {
      button_list = e.target.parentElement.parentElement.childNodes;
      button = e.target.parentElement
    } else {
      button_list = e.target.parentElement.childNodes;
      button = e.target
    }
    button_list.forEach((button)=>{
      button.classList.remove('btn-active')
    })
    button.classList.add('btn-active')


    const { name, value } = button;
    if (name === 'search') {
      dispatch(changeUtilityState(value))
    } else if (name === 'cart') {
      dispatch(changeUtilityState(value))
    } else if (name === 'gpt') {
      dispatch(changeUtilityState(value))
    } else if (name === 'account') {
      dispatch(changeUtilityState(value))
    } else if (name === 'setting') {
      dispatch(changeUtilityState(value))
    }
  }

  return (
      <>
        <div className="navbar">
          <div className="navbar__box">
              {/* todo - mouse hover 모달장 만들기. */}
              <button className="navbar__box__button" onClick={onClick} name="search" value="search"><RxMagnifyingGlass /></button>
              <button className="navbar__box__button" onClick={onClick} name="cart" value="cart"><BsCart2 /></button>
              <button className="navbar__box__button" onClick={onClick} name="gpt" value="gpt"><PiBrain /></button>
              <div className="invisible_box-nav"></div>
              <button className="navbar__box__button" onClick={onClick} name="account" value="account"><MdAccountCircle /></button>
              <button className="navbar__box__button" onClick={onClick} name="setting" value="setting"><IoSettingsOutline /></button>
          </div>
        </div>
      </>
  )
}