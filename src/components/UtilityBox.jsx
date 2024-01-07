export default function UtilityBox() {
  return (
      <>
        <div className="utility-box">
          <form action="" className="utility-box__form">
            <input type="text" className="utility-box__form__input" placeholder="검색어를 입력하세요"/>
            {/* todo - 자주쓰는 버튼 class명 변경 뭘로함?*/}
            <button className="utility-box__form__button navbar__box__button">검색</button>
          </form>
        </div>
      </>
  )
}