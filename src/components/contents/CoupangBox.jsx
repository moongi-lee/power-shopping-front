import {SiShopee} from "react-icons/si";

export default function CoupangBox() {
  return (
      <>
        <div className="contents__box__shop">
          <h3 className="contents__box__shop-name"><SiShopee/> 쿠팡</h3>
          <div className="contents__box__shop-cart">
            {
              [...Array(10)].map((e, i) => (
                    <div className="contents__box__shop_cart-item">
                      <img alt="item image" className="contents__box__shop_cart-item-image"
                           src="https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9561/ce79bc4876b2cc30bb31492fe6f0a23829d31e8cda24187d96716d44b372.jpg"/>
                      <div className="contents__box__shop_cart-item__info">
                        <div className="contents__box__shop_cart-item__info-title">하이마블 토마호크 스테이크 립아이 등심 티본 엘본</div>
                        <div className="contents__box__shop_cart-item__info-price">36,000원</div>
                        <div className="contents__box__shop_cart-item__info-num">{i}위</div>
                      </div>
                    </div>
                ))
            }
          </div>
        </div>
  </>
  )
}