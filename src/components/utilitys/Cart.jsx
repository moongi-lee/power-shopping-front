import {IoClose} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {changeUtilityBoxState} from "../../store";

export default function Cart() {
	let dispatch = useDispatch();

	const onClickClose = (e) => {
		e.preventDefault();
		dispatch(changeUtilityBoxState('invisible'))
	}
  return (
		  <>
			  <div className="utility-box__title">
				  <div>장바구니</div>
				  <div className="invisible_box"></div>
				  <div onClick={onClickClose} className="close"><IoClose/></div>
			  </div>
			  <h4>개발중....</h4>
		  </>
  )
}