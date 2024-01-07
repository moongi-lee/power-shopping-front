import { SiShopee } from "react-icons/si";
import Item from "./Item";
import ShopBox from "./ShopBox";

export default function Contents() {

  return (
      <>
        <div className="contents">
          <div className="contents__box">
            {
              [...Array(5)].map((e, i) => {
                return (
                    <ShopBox key={i} num={i}/>
                )
              })
            }
          </div>
        </div>
      </>
  )
}