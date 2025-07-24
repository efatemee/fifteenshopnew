import styled from "./navbar.module.css";
import img from "../../assets/image/لوگو-فروشگاه-پانزده.webp";

function Navbar() {
  return (
    <>
      <div className={styled.box}>
        <div className={styled.navbarwrapper}>
          <img src={img} alt="fifteenshop" />
          <div className={styled.searchbox}>
            <input type="search" placeholder="دنبال چه می گردی!؟ " />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                ></path>
              </svg>
            </button>
          </div>
          <div className={styled.buttonstyle}>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray={28}
                    strokeDashoffset={28}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.7s"
                        values="28;0"
                      ></animate>
                    </path>
                    <path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z">
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.7s"
                        values="28;0"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </button>
              <span>پنل کاربری</span>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={64}
                      strokeDashoffset={64}
                      d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="1.05s"
                        values="64;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={16}
                      strokeDashoffset={16}
                      d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.225s"
                        dur="0.35s"
                        values="16;0"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </button>
              <span>سبد خرید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
