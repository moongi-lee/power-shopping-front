import {SiShopee} from "react-icons/si";
import {useSelector} from "react-redux";

export default function CoupangBox() {
  let coupangDataState = useSelector(state => state.coupangDataState)

  return (
      <>
        <div className="contents__box__shop">
          <h3 className="contents__box__shop-name"><SiShopee/> 쿠팡</h3>
          <div className="contents__box__shop-cart">
            {
              [...coupangDataState].map((item, i) => (
                    <div className="contents__box__shop_cart-item" key={i}>
                      <img alt="item" className="contents__box__shop_cart-item-image"
                           src={item['img_url']}/>
                      <div className="contents__box__shop_cart-item__info">
                        <div className="contents__box__shop_cart-item__info-title">{item['name']}</div>
                        <div className="contents__box__shop_cart-item__info-price">{item['price']}원</div>
                        <div className="contents__box__shop_cart-item__info-num">{item['rank']}위</div>
                      </div>
                    </div>
                ))
            }
          </div>
        </div>
      </>
  )
}