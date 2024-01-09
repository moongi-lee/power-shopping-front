import {useSelector} from "react-redux";
import Search from "../utilitys/Search";
import Cart from "../utilitys/Cart";
import Gpt from "../utilitys/Gpt";
import Account from "../utilitys/Account";
import Setting from "../utilitys/Setting";


export default function UtilityBox() {

  let utilityState = useSelector(state => state.utilityState)
  let utilityObj = {
    'search': <Search/>,
    'cart': <Cart/>,
    'gpt': <Gpt/>,
    'account': <Account/>,
    'setting': <Setting/>,
  }
  let utilityBoxState = useSelector(state => state.utilityBoxState)


  return (
      <>
        <div className="utility-box">
          {
            utilityObj[utilityState]
          }
        </div>
      </>
  )
}