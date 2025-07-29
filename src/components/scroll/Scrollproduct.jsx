import { useRef, useEffect, useState } from "react";
import ProductCard from "../productcard/productcard";
import "./scroll.css";
import Buttongreen from "../button/buttongreen";

const ScrollProduct = ({ category = "", title = "محصولات پیشنهادی" }) => {
  const scrollRef = useRef(null);
  const [productList, setProductList] = useState([]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 229; // اسکرول به اندازه 4 محصول
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = category
          ? data.filter((item) => item.category === category)
          : data;

        const container = scrollRef.current;
        if (!container) return;

        const singleWidth = 200;
        const totalContentWidth = filtered.length * singleWidth;
        const requiredRepeats =
          Math.ceil(container.clientWidth / totalContentWidth) + 3;

        let repeated = [];
        for (let i = 0; i < requiredRepeats; i++) {
          repeated = [...repeated, ...filtered];
        }

        setProductList(repeated);

        // اسکرول از وسط شروع بشه تا به چپ و راست بشه رفت
        setTimeout(() => {
          if (container) {
            container.scrollLeft =
              (container.scrollWidth - container.clientWidth) / 2;
          }
        }, 100);
      })
      .catch((err) => console.error("خطا در دریافت محصولات:", err));
  }, [category]);

  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <button className="butt"></button>
        <h2>{title}</h2>
        <div className="line"></div>
        <Buttongreen title="مشاهده همه" />
      </div>
      <button className="scroll-button left" onClick={() => scroll("left")}>
        ◀
      </button>

      <div className="carousel-scroll" ref={scrollRef}>
        {productList.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>

      <button className="scroll-button right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
};

export default ScrollProduct;
