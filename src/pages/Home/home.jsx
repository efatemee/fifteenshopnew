import Navbar from "../../components/navbar/navbar";
import styled from "./home.module.css";
import img from "../../assets/image/تصویر-شاخص-صفحه-اصلی.webp";
import Bottongreen from "../../components/button/buttongreen";
import Bottongray from "../../components/button/buttongray";
import img2 from "../../assets/image/عکس-شاخص-صفحه-اصلی.webp";
import img3 from "../../assets/image/مراحل-خرید2.webp";
import ScrollProduct from "../../components/scroll/Scrollproduct";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styled.txtshop}>
          <section>
            <h1>
              فروش انواع <span>محصولات</span> به قیمت عمده
            </h1>
            <p>
              با پانزده یک فروشگاه توجیبته که هرزمان ، هر محصولی رو راحت و امن
              خرید کنی
              <br />
              تا الان چیزی نگرفتی.! همین حالا اولین خریدت رو با تخفیف از فروشگاه
              پانزده تجربه کن
            </p>

            <Bottongray title="بزن بریم برای تخفیف" />
            <Bottongreen title="بزن بریم فروشگاه" />
          </section>
          <img src={img} alt="image products" />
        </div>
        <ScrollProduct category="جدید" title="محصولات جدید" />
        <div className={styled.txt2shop}>
          <section>
            <div className={styled.moraba}>
              <button></button>
              <h1>
                حس خوب <span>رسید </span>
              </h1>
            </div>
            <p>
              همه‌ی ما وقتی کالایی را به صورت اینترنتی سفارش میدهیم ، لحضه شماری
              میکنیم تا بسته سالم و هرچه زود تر به دستمان برسد ، تیم ما تلاش
              میکند تا حس و تجربه خوبی از خرید اینترنتی برایتان بسازد
            </p>
          </section>
          <img src={img2} alt="image products" />
        </div>
        <ScrollProduct />
        <div className={styled.buysteps}>
          <img src={img3} alt="buy steps" />
        </div>
        <ScrollProduct category="تولیدی" title="محصولات تولیدی" />
      </div>
      <Footer/>
    </>
  );
}
export default Home;
