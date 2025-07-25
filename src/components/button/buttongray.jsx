import styled from "./buttongray.module.css";
function Buttongray(props) {
  return (
    <button className={styled.buttongray}>
      <p>{props.title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="64"
            stroke-dashoffset="64"
            d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="1.83s"
              values="64;0"
            />
          </path>
          <path
            stroke-dasharray="6"
            stroke-dashoffset="6"
            d="M10 12l3 -3M10 12l3 3"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="2.135s"
              dur="0.915s"
              values="6;0"
            />
          </path>
        </g>
      </svg>
    </button>
  );
}
export default Buttongray;
