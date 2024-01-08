import {IoClose} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {changeKeywordState, changeContentsBoxState} from "../../store";
import {useNavigate} from "react-router-dom";

export default function Search() {

	let dispatch = useDispatch();
	let navigate = useNavigate();


	const onChange = (e) => {
		let value = e.target.value;
		dispatch(changeKeywordState(value))
	}
	const onClick = (e) => {
		e.preventDefault();
		dispatch(changeContentsBoxState('coupang'))
		navigate('/')
	}

	return (
		  <>
			  <div className="utility-box__title">
				  <div>원펀치 검색</div>
				  <div className="invisible_box"></div>
				  <div className="close"><IoClose/></div>
			  </div>
			  <form className="utility-box__form">
				  <input onChange={onChange} type="text" className="utility-box__form__input" placeholder="검색어를 입력하세요"/>
				  <button onClick={onClick}  className="utility-box__form__button">검색</button>
			  </form>
		  </>
  )
}