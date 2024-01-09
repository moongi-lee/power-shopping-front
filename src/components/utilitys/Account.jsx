import {IoClose} from "react-icons/io5";
import {changeUtilityBoxState} from "../../store";
import {useDispatch} from "react-redux";

export default function Account() {
	let dispatch = useDispatch();

	const onClickClose = (e) => {
		e.preventDefault();
		dispatch(changeUtilityBoxState('invisible'))
	}

  return (
		  <>
			  <div className="utility-box__title">
				  <div>계정정보</div>
				  <div className="invisible_box"></div>
				  <div onClick={onClickClose} className="close"><IoClose/></div>
			  </div>
			  <h4>개발중....</h4>
		  </>
  )
}