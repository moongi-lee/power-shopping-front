import CoupangBox from "../contents/CoupangBox";
import DefaultBox from "../contents/DefaultBox";

export default function Contents() {

  return (
      <>
        <div className="contents">
          <div className="contents__box">
            <CoupangBox />
            {/*<DefaultBox />*/}
          </div>
        </div>
      </>
  )
}