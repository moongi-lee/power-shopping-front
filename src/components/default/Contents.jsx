import CoupangBox from "../contents/CoupangBox";
import DefaultBox from "../contents/DefaultBox";
import {useDispatch, useSelector} from "react-redux";
import {IoClose} from "react-icons/io5";
import {changeContentsBoxState} from "../../store";

export default function Contents() {
  let dispatch = useDispatch();
  let contentsState = useSelector(state => state.contentsBoxState)
  const contentsObj = {
    'default': <DefaultBox />,
    'coupang': <CoupangBox />
  }

  const onClick = (e) => {
    dispatch(changeContentsBoxState('default'))
  }



  return (
      <>
        <div className="contents">
          <div className="contents__box">
            {
              contentsState !== 'default' ?
                <div onClick={onClick} className="contents__box__close-btn"><IoClose/></div>
                  : null
            }
            {
              contentsObj[contentsState]
            }
          </div>
        </div>
      </>
  )
}