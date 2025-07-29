import Buttongreen from "../button/buttongreen";
import styled from "./productcard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styled.product_card}>
      <img
        src={product.image}
        alt={product.title}
        className={styled.product_image}
      />
      <div className={styled.product_content}>
        <h3 className={styled.product_title}>{product.title}</h3>
        <div className={styled.boxadd}>
          <div>
            <h5 className={styled.product_price}>{product.price}</h5>
            <p>تومان</p>
          </div>
          <button className={styled.product_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
