import {SiShopee} from "react-icons/si";
import Item from "./Item";

export default function ShopBox() {
  return (
      <>
        <div className="contents__box__shop">
          <h3 className="contents__box__shop-name"><SiShopee/> 쿠팡</h3>
          {/* todo - 현재 부모박스 기준 넓이 재정의 추가 */}
          <div className="contents__box__shop-cart">
            {
              [...Array(10)].map((e, i) => {
                return (
                    <Item key={i} i={i+1}/>
                )
              })
            }
          </div>
        </div>
      </>
  )
}