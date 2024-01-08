import CoupangBox from "../contents/CoupangBox";
import DefaultBox from "../contents/DefaultBox";
import {useSelector} from "react-redux";

export default function Contents() {
  let contentsState = useSelector(state => state.contentsBoxState)


  const contentsObj = {
    'default': <DefaultBox />,
    'coupang': <CoupangBox />
  }


  return (
      <>
        <div className="contents">
          <div className="contents__box">
            {
              contentsObj[contentsState]
            }
          </div>
        </div>
      </>
  )
}