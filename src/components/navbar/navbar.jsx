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
      <div className={styled.sectionend}>
        <ul>
          <li>
            <h3>دسته بندی محصولات</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.55 20l.113-.875q.112-.875.262-2.125q.05-.275.063-.525T19.05 16l.113-.875q.112-.875.262-2.125q.15-1.275.263-2.137L19.8 10l.25-2v.025zM6 22q-.825 0-1.412-.587T4 20h14.575L20.05 8.025H17.3l-.275 2.125q-.05.425-.375.663T15.9 11t-.662-.363t-.188-.737l.225-1.875H11.3l-.275 2.1q-.05.425-.375.675t-.75.2t-.675-.375t-.2-.75l.225-1.85H5.5q.1-.85.65-1.437T7.5 6h2q.2-1.875 1.288-2.937T13.75 2q1.6 0 2.663 1.188T17.45 6H20q.9.025 1.5.7t.475 1.575l-1.5 12q-.1.75-.663 1.238T18.5 22zm5.5-16h3.975q.025-.825-.562-1.412T13.5 4q-.875 0-1.388.538T11.5 6M5.75 18h-3.5q-.425 0-.712-.288T1.25 17t.288-.712T2.25 16h3.5q.425 0 .713.288T6.75 17t-.288.713T5.75 18m3-4h-4.5q-.425 0-.712-.288T3.25 13t.288-.712T4.25 12h4.5q.425 0 .713.288T9.75 13t-.288.713T8.75 14"
              ></path>
            </svg>
          </li>
          <li>
            <h3>مقالات</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 12.25h8q.425 0 .713-.288T17 11.25t-.288-.712T16 10.25H8q-.425 0-.712.288T7 11.25t.288.713t.712.287m0-3.5h8q.425 0 .713-.288T17 7.75t-.288-.712T16 6.75H8q-.425 0-.712.288T7 7.75t.288.713T8 8.75M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-3h-3q-.75.95-1.787 1.475T12 18t-2.212-.525T8 16H5zm7-3q.8 0 1.475-.413t1.1-1.087q.15-.225.375-.363t.5-.137H19V5H5v9h3.55q.275 0 .5.138t.375.362q.425.675 1.1 1.088T12 16m-7 3h14z"
              ></path>
            </svg>
          </li>
          <li>
            <h3>ارتباط با ما</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4zm4-5q.425 0 .713-.288T9 10t-.288-.712T8 9t-.712.288T7 10t.288.713T8 11m4 0q.425 0 .713-.288T13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11m4 0q.425 0 .713-.288T17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11"
              ></path>
            </svg>
          </li>
          <li>
            <h3>نماد های اعتماد</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.95 15.55L16.6 9.9l-1.425-1.425L10.95 12.7l-2.1-2.1l-1.425 1.425zM12 22q-3.475-.875-5.737-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
