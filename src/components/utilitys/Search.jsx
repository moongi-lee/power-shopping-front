import {IoClose} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {changeKeywordInputState, changeCoupangDataState, changeKeywordState, changeContentsBoxState, changeUtilityBoxState} from "../../store";
import axios from "axios";
import {useEffect, useState} from "react";



export default function Search() {
	let dispatch = useDispatch();
	let keywordInputState = useSelector(state => state.keywordInputState)
	let keyword = useSelector(state => state.keywordState)
	let [inputState, setInputState] = useState("")



	const onChange = (e) => {
		let value = e.target.value;
		dispatch(changeKeywordState(value))
		setInputState(value)

		if (value === "") {
			dispatch(changeKeywordInputState(1))
		} else {
			dispatch(changeKeywordInputState(0))
		}
	}
	const onClick = (e) => {
		if (inputState === '') {
			e.preventDefault();
		} else {
			e.preventDefault();
			let coupangAPI = 'http://localhost:8000/one_punch/coupang/get/?keyword='
			// let testAPI = 'http://localhost:8000/one_punch/test/get/?keyword='
			axios.get(coupangAPI + keyword)
					.then((response)=> {
						dispatch(changeCoupangDataState(response.data))
						dispatch(changeContentsBoxState('coupang'))
					})
					.catch((error)=>{
						console.log(error)
					})
		}
	}

	const onClickClose = (e) => {
		e.preventDefault();
		dispatch(changeUtilityBoxState('invisible'))
		 let button;
    // utilitybox close
    if (e.target.tagName === 'path') {
      button = e.target.parentElement.parentElement.parentElement.parentElement;
    } else if (e.target.tagName === 'svg') {
      button = e.target.parentElement.parentElement.parentElement;
    } else {
      button = e.target.parentElement.parentElement;
    }
    button.classList.add('utility-box-invisible')
	}


	return (
		  <>
			  {
					keywordInputState === 0 ?
							<>
								<div className="utility-box__title">
								  <div>원펀치 검색</div>
								  <div className="invisible_box"></div>
								  <div onClick={onClickClose} className="close"><IoClose/></div>
							  </div>
							  <form className="utility-box__form">
								  <input onChange={onChange} type="text" className="utility-box__form__input" placeholder="검색어를 입력하세요"/>
								  <button onClick={onClick}  className="utility-box__form__button">검색</button>
							  </form>
							</>
					 :
							<>
								<div className="utility-box__title">
								  <div>원펀치 검색</div>
								  <div className="invisible_box"></div>
								  <div onClick={onClickClose} className="close"><IoClose/></div>
							  </div>
							  <form className="utility-box__form">
								  <input onChange={onChange} type="text" className="utility-box__form__input" placeholder="검색어를 입력하세요"/>
								  <button onClick={onClick}  className="utility-box__form__button">검색</button>
								  <div className="utility-box__form__alert">키워드를 입력하세요.</div>
							  </form>
							</>
			  }

		  </>
  )
}