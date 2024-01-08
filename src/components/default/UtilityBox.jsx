import { IoClose } from "react-icons/io5";


export default function UtilityBox() {
  return (
      <>
        <div className="utility-box">
          <div className="utility-box__title">
            <div>원펀치 검색</div>
            <div className="invisible_box"></div>
            <div className="close"><IoClose /></div>
          </div>
          <form action="" className="utility-box__form">
            <input type="text" className="utility-box__form__input" placeholder="검색어를 입력하세요"/>
            <button className="utility-box__form__button">검색</button>
          </form>
        </div>
      </>
  )
}