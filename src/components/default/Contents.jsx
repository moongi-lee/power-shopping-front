import CoupangBox from "../contents/CoupangBox";
import DefaultBox from "../contents/DefaultBox";

export default function Contents() {

  return (
      <>
        <div className="contents">
          <div className="contents__box">
            {
              [...Array(10)].map((_, i) => <CoupangBox i={i+1}/>)
            }
            {/*<CoupangBox />*/}
            {/*<DefaultBox />*/}
          </div>
        </div>
      </>
  )
}